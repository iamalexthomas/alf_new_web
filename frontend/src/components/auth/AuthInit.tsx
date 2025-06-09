// src/components/auth/AuthInit.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMeQuery } from '../../store/api/userApi';
import { setLoading, setUser, setIsAuthenticated, clearUser } from '../../store/features/userSlice';
import { RootState } from '../../store/store';

const AuthInit = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.user);
  
  // This will automatically check authentication status on app load
  // The getMe query will use the HTTP-only cookie if it exists
  const { isLoading, error, data } = useGetMeQuery(undefined, {
    // Skip if we're in SSR environment
    skip: typeof window === 'undefined',
  });

  useEffect(() => {
    console.log('AuthInit: Checking authentication status...', {
      isAuthenticated,
      isLoading,
      error: error ? 'Error occurred' : 'No error',
      data: data ? 'User data received' : 'No user data'
    });

    // Handle the authentication check result
    if (!isLoading) {
      if (data && data.id) {
        // User is authenticated and we have user data
        dispatch(setUser({
          id: data.id,
          name: data.name || "",
          email: data.email || ""
        }));
        dispatch(setIsAuthenticated(true));
      } else if (error) {
        // Authentication failed, clear any existing auth state
        dispatch(clearUser());
      }
      dispatch(setLoading(false));
    } else {
      // Still loading
      dispatch(setLoading(true));
    }
  }, [isAuthenticated, isLoading, error, data, dispatch]);

  // Return null since this is just an initialization component
  return null;
};

export default AuthInit;

import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../store/api/authApi";
import { setUser, setIsAuthenticated } from "../../store/features/userSlice";

const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login({ email, password }).unwrap();
      
      if (response.success) {
        dispatch(setUser({
          _id: response.user.id,
          name: response.user.name,
          email: response.user.email,
          token: response.token
        }));
        dispatch(setIsAuthenticated(true));
        toast.success("Login Successful");
        navigate("/my-account");
      } else {
        toast.error(response.error || "Login failed");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage = error.data?.error || 
                         error.data?.message || 
                         "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
            <form onSubmit={handleSubmit} className="white-popup-block">
              <div className="col-md-8 login-custom">
                <h4>Login to your registered account!</h4>
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email*"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password*"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-theme effect btn-md"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
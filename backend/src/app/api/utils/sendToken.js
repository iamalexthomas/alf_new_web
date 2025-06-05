const sendToken = (user, statusCode) => {
  const token = user.getJwtToken();

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    maxAge: (process.env.COOKIE_EXPIRES_TIME || 7) * 24 * 60 * 60,
    path: "/",
  };

  const response = NextResponse.json(
    {
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    },
    { status: statusCode }
  );

  response.cookies.set("token", token, cookieOptions);
  return response;
};
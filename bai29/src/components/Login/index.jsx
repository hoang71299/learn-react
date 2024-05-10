const Login = () => {
  const isLogin = true;

  return (
    <>
      {isLogin == true ? (
        <div>Thông tin người dùng, nut logout</div>
      ) : (
        <div>Nút đăng nhập</div>
      )}

      {isLogin && <div>Avatar</div>}
    </>
  );
};

export default Login;

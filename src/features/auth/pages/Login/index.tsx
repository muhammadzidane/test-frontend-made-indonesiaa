// React
import React from "react";

// Components
import { Content, LoginForm, LoginSosmed, Navbar, SignUp } from "./components";

const Login: React.FC = () => (
  <div className="flex flex-col h-[100vh]">
    <Navbar />
    <Content>
      <LoginSosmed />
      <LoginForm />
      <SignUp />
    </Content>
  </div>
);

export default Login;

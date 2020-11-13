import React, { useState } from "react";
import styled from "styled-components";
import { notification, Spin } from "antd";

import Input from "components/Input";
import Button from "components/Button";
import Text from "components/Typography";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 400px;
`;

const Logo = styled.img`
  height: 80px;
  margin: 2em 0;
`;

const Devider = styled.div`
  margin: 1em 0;
`;

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputFields = (e, key, setState) => {
    setState((key = e.target.value));
  };

  const login = () => {
    let isValid = true;
    let userEmail = localStorage.getItem("email");
    let userPassword = localStorage.getItem("passowrd");
    if (email === "") {
      notification.error({ message: "Please enter your email" });
      isValid = false;
    }
    if (password === "") {
      notification.error({ message: "Please enter your password" });
      isValid = false;
    }

    if (userEmail === email) {
      isValid = true;
    } else {
      isValid = false;
      notification.error({ message: "email not found please try aganin" });
    }
    if (userPassword === password) {
      isValid = true;
    } else {
      isValid = false;
      notification.error({ message: "invalid password please try aganin" });
    }
    if (isValid) {
      setIsLoading(true);
      notification.success({ message: "Login successful" });
      localStorage.setItem("token", userEmail);
      history.push("/dashboard");
    }
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Logo src={require("assets/images/logo.png")} />
        <Devider>
          <Text
            text="Welcome to Doctors portal"
            type="header"
            weight="400"
            color="rgb(131 216 68)"
          ></Text>
        </Devider>
        <Devider>
          <Text
            text="Login to continue"
            type="header"
            weight="500"
            color="rgb(61 115 20)"
          ></Text>
        </Devider>
        <Input
          width={"95%"}
          value={email}
          placeholder="user email"
          onChange={(e) => handleInputFields(e, "email", setEmail)}
        />
        <Input
          type="password"
          width={"95%"}
          value={password}
          placeholder="user password"
          onChange={(e) => handleInputFields(e, "password", setPassword)}
        />
        <Devider>
          <Button width={"50%"} onClick={login}>
            {isLoading ? <Spin /> : "Login"}
          </Button>
        </Devider>
        <Devider>
          <Text text="dont have an account?" />
          <Button
            width={"50%"}
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign up
          </Button>
        </Devider>
      </LoginContainer>
    </Wrapper>
  );
};
export default Login;

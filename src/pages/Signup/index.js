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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputFields = (e, key, setState) => {
    setState((key = e.target.value));
  };

  const signUp = () => {
    let isValid = true;
    if (name === "") {
      notification.error({ message: "Please enter your name" });
      isValid = false;
    }
    if (email === "") {
      notification.error({ message: "Please enter your email" });
      isValid = false;
    }
    if (password === "") {
      notification.error({ message: "Please enter your password" });
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("email", email);
      localStorage.setItem("passowrd", password);
      notification.success({ message: "Successfully created a new account" });
      history.push("/login");
    }
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Logo src={require("assets/images/logo.png")} />
        <Devider></Devider>
        <Devider>
          <Text
            text="Please create a new account"
            type="header"
            weight="500"
            color="rgb(61 115 20)"
          ></Text>
        </Devider>
        <Input
          width={"95%"}
          value={name}
          placeholder="Name"
          onChange={(e) => handleInputFields(e, "email", setName)}
        />
        <Input
          width={"95%"}
          value={email}
          placeholder="Email"
          onChange={(e) => handleInputFields(e, "email", setEmail)}
        />
        <Input
          type="password"
          width={"95%"}
          value={password}
          placeholder="Password"
          onChange={(e) => handleInputFields(e, "password", setPassword)}
        />
        <Devider>
          <Button width={"50%"} onClick={signUp}>
            {isLoading ? <Spin /> : "Sign up"}
          </Button>
        </Devider>
        <Devider>
          <Text text="already have an account?" />
          <Button
            width={"50%"}
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>
        </Devider>
      </LoginContainer>
    </Wrapper>
  );
};
export default Login;

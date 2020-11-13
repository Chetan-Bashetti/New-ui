import React, { useEffect } from "react";
import styled from "styled-components";
import Text from "components/Typography";

import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Welcome = () => {
  let history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  }, [history]);

  return (
    <Wrapper>
      <Text text="welcome to" type="header" color="rgb(37 129 196)" />
      &nbsp;
      <Text text="doctors portal" type="header" color="rgb(37 129 196)" />
    </Wrapper>
  );
};
export default Welcome;

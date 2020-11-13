import React from "react";
import styled from "styled-components";

import Image from "./partials/Image";
import HeaderText from "./partials/HeaderText";

const Wrapper = styled.div`
  display: flex;
  padding: 1% 10%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 8px #dad6d6;
`;

const HeaderBar = () => {
  return (
    <Wrapper>
      <Image src={require("assets/images/logo.png")} />
      <HeaderText />
    </Wrapper>
  );
};

export default HeaderBar;

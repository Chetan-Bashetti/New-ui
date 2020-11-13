import React from "react";
import styled from "styled-components";

import HeaderBar from "components/HeaderBar";
import UserList from "pages/Dashbaord";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <HeaderBar />
      <UserList />
    </Wrapper>
  );
};

export default LandingPage;

import React from "react";
import styled from "styled-components";

import Typography from "components/Typography";
import { PoweroffOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PortalName = styled.div`
  margin-right: 1em;
`;

const HeaderText = () => {
  let history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Wrapper>
      <PortalName>
        <Typography
          text="users"
          type="subheader"
          weight="400"
          color="rgb(37 129 196)"
        />
        <Typography
          text="portal"
          type="subheader"
          weight="500"
          color="rgb(37 129 196)"
        />
      </PortalName>
      <PoweroffOutlined
        onClick={() => logOut()}
        style={{ fontSize: "2em", color: "rgb(37 129 196)", cursor: "pointer" }}
      />
    </Wrapper>
  );
};
export default HeaderText;

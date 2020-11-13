import React from "react";
import styled from "styled-components";

import Typography from "components/Typography";

const Wrapper = styled.div``;

const HeaderText = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default HeaderText;

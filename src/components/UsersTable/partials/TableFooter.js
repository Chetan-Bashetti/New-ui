import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

import Button from "components/Button";

const Wrapper = styled.div`
  height: 60px;
  display: flex;
`;

const TableFooter = ({ changePage, isLoading }) => {
  return (
    <Wrapper>
      <Button onClick={() => changePage()} disabled={isLoading}>
        {isLoading ? <Spin /> : "Load More"}
      </Button>
    </Wrapper>
  );
};
export default TableFooter;

import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

//Importig components
import Input from "components/Input";
import Button from "components/Button";

const Wrapper = styled.div`
  display: flex;
`;

const SearchInput = ({ searchKey, handleSearchKey, setSearchKey }) => {
  return (
    <Wrapper>
      <Input
        width={"95%"}
        value={searchKey}
        placeholder="search a patient by name"
        onChange={(e) => handleSearchKey(e)}
        suffix={<SearchOutlined />}
      />
      <Button width={"120px"} onClick={() => setSearchKey("")}>
        Clear
      </Button>
    </Wrapper>
  );
};
export default SearchInput;

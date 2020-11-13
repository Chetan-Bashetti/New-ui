import styled from "styled-components";
import { Select } from "antd";

const StyledInput = styled(Select)`
  border: 2px solid rgb(37 129 196);
  border-radius: 4px;
  padding: ${(props) => (props.padding ? props.padding : "0px 0px")};
  font-size: 1em;
  font-family: "Raleway", sans-serif;
  width: ${(props) => (props.width ? props.width : "150px")};
  margin: ${(props) => (props.margin ? props.margin : "0.5em")};
  outline: none;
  &:hover {
    border-color: rgb(37 129 196);
    box-shadow: 0 0 0 1px rgb(37 129 196);
  }
  &:focus {
    border-color: rgb(37 129 196);
    box-shadow: 0 0 0 1px rgb(37 129 196);
  }
`;

export default StyledInput;

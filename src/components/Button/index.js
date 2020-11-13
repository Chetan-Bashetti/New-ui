import styled from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
  width: ${(props) => (props.width ? props.width : "95%")};
  height: auto;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(37 129 196);
  border-radius: 4px;
  color: rgb(37 129 196);
  padding: 10px 25px;
  font-size: 1em;
  color: rgb(43, 105, 169);
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  transition: color 0.2s ease-in-out 0s, background-color 0.1s ease 0.02s;
  transform: translateY(0px);
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  margin: 0.5em;
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(37 129 196);
    transition-delay: 0s, 0.15s;
    border-color: rgb(37 129 196);
  }
  &:focus {
    color: rgb(255, 255, 255);
    background-color: rgb(37 129 196);
    border-color: rgb(37 129 196);
  }
`;

export default StyledButton;

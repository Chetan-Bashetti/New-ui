import React from "react";
import styled from "styled-components";

const Header = styled.div`
  font-size: 2em;
  font-family: "Raleway", sans-serif;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "black")};
  text-transform: capitalize;
  line-height: 1;
`;

const Subheader = styled.div`
  font-size: 1.5em;
  font-family: "Raleway", sans-serif;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "black")};
  text-transform: capitalize;
  line-height: 1;
`;

const Title = styled.div`
  font-size: 1.3em;
  font-family: "Raleway", sans-serif;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "black")};
  text-transform: capitalize;
  line-height: 1;
`;

const Description = styled.div`
  font-size: 1em;
  font-family: "Raleway", sans-serif;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "black")};
  text-transform: capitalize;
  line-height: 1;
`;

const Typography = ({ text, type, weight, color }) => {
  switch (type) {
    case "header":
      return (
        <Header weight={weight} color={color}>
          {text}
        </Header>
      );
    case "subheader":
      return (
        <Subheader weight={weight} color={color}>
          {text}
        </Subheader>
      );
    case "title":
      return (
        <Title weight={weight} color={color}>
          {text}
        </Title>
      );
    default:
      return (
        <Description weight={weight} color={color}>
          {text}
        </Description>
      );
  }
};
export default Typography;

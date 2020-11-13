import React, { useState } from "react";
import styled from "styled-components";
import { notification, Spin, Radio } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

//Importig components
import Input from "components/Input";
import Button from "components/Button";
import Text from "components/Typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  overflow: auto;
  box-shadow: 0px 1px 10px #ececec;
`;

const Devider = styled.div`
  margin: 1em 0;
`;

const Container = styled.div`
  display: flex;
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  justify-content: space-between;
  width: 95%;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddUser = ({
  name,
  email,
  gender,
  phone,
  age,
  handleInputFields,
  setName,
  setEmail,
  setGender,
  setPhone,
  setAge,
  isLoading,
  addNewUser,
  handleNumberedInputs,
}) => {
  return (
    <Wrapper>
      <Devider>
        <Text
          text="Add a new patient"
          type="header"
          weight="400"
          color="rgb(37 129 196)"
        ></Text>
      </Devider>
      <Input
        suffix={<UserOutlined />}
        width={"95%"}
        value={name}
        placeholder="patient name"
        onChange={(e) => handleInputFields(e, setName)}
      />
      <Input
        suffix={<MailOutlined />}
        width={"95%"}
        value={email}
        placeholder="patient email"
        onChange={(e) => handleInputFields(e, setEmail)}
      />
      <Input
        suffix={<PhoneOutlined />}
        width={"95%"}
        value={phone}
        maxLength={10}
        placeholder="patient phone"
        onChange={(e) => handleNumberedInputs(e, setPhone)}
      />
      <Input
        suffix={<PhoneOutlined />}
        width={"95%"}
        value={age}
        maxLength={2}
        placeholder="patient age"
        onChange={(e) => handleNumberedInputs(e, setAge)}
      />

      <Container>
        <Text
          text="Gender"
          type="subheader"
          weight="600"
          color="rgb(37 129 196)"
        />
        <Radio.Group
          value={gender}
          onChange={(value) => handleInputFields(value, setGender)}
        >
          <Radio value={"male"}>Male</Radio>
          <Radio value={"female"}>Female</Radio>
        </Radio.Group>
      </Container>

      <ButtonWrapper>
        <Button width={"50%"} onClick={addNewUser} disabled={isLoading}>
          {isLoading ? <Spin /> : "Add user"}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
export default AddUser;

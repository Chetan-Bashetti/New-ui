import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, notification, message } from "antd";

//Importig components
import Button from "components/Button";
import Table from "components/UsersTable";
import Text from "components/Typography";
import AddUser from "components/AddUser";
import { useHistory } from "react-router-dom";

//Importing dummy data to check pagination
import UsersData from "./Data";

const PAGE_LIMIT = 5;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 5% 10%;
  overflow: hidden;
`;

const ModalData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ModalText = styled(ModalData)`
  height: 3em;
`;
const ModalActions = styled.div`
  display: flex;
`;

const Dashboard = () => {
  let history = useHistory();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [visible, setVisible] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
      setUsersData();
    } else {
      history.push("/login");
    }
  }, []);

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  const setUsersData = () => {
    if (UsersData.length > users.length) {
      message.info("Loading data please wait");
      let pageOffset = (pageNum - 1) * PAGE_LIMIT;
      let pageLimit = pageNum * PAGE_LIMIT;
      var updatedUsers = UsersData.slice(pageOffset, pageLimit);
      setUsers([...users, ...updatedUsers]);
      setPageNum(pageNum + 1);
    } else {
      notification.error({ message: "End of users list" });
    }
  };

  const changePage = () => {
    let updatedPageNum = pageNum;
    setPageNum(updatedPageNum + 1);
  };

  const removeUser = (id) => {
    const updatedUsers = [...users];
    updatedUsers.splice(id, 1);
    setUsers(updatedUsers);
    closeModal();
  };

  const sortUsers = (key) => {
    const updatedUsers = [...users];
    switch (key) {
      case "ageAsc":
        updatedUsers.sort((a, b) => a.age - b.age);
        break;
      case "ageDsc":
        updatedUsers.sort((a, b) => b.age - a.age);
        break;
      case "nameAsc":
        updatedUsers.sort((a, b) => {
          return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
            ? -1
            : 0;
        });
        break;
      case "nameDsc":
        updatedUsers.sort((a, b) => {
          return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
            ? 1
            : a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? -1
            : 0;
        });
        break;
      case "emailAsc":
        updatedUsers.sort((a, b) => {
          return a.email.toLocaleLowerCase() > b.email.toLocaleLowerCase()
            ? 1
            : a.email.toLocaleLowerCase() < b.email.toLocaleLowerCase()
            ? -1
            : 0;
        });
        break;
      case "emailDsc":
        updatedUsers.sort((a, b) => {
          return a.email.toLocaleLowerCase() < b.email.toLocaleLowerCase()
            ? 1
            : a.email.toLocaleLowerCase() > b.email.toLocaleLowerCase()
            ? -1
            : 0;
        });
        break;
      default:
    }
    setUsers(updatedUsers);
  };

  const openModal = (id) => {
    setVisible(true);
    setSelectedId(id);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleInputFields = (e, setState) => {
    setState(e.target.value);
  };

  const handleNumberedInputs = (e, setState) => {
    setState(Number(e.target.value.replace(/[^\d]+/g, "")));
  };

  const addNewUser = () => {
    let isValid = true;
    if (name === "") {
      notification.error({ message: "Please enter patient name" });
      isValid = false;
    }
    if (email === "") {
      notification.error({ message: "Please enter patient email" });
      isValid = false;
    }
    if (phone === "") {
      notification.error({ message: "Please enter patient phone number" });
      isValid = false;
    }
    if (age === "") {
      notification.error({ message: "Please enter patient age" });
      isValid = false;
    }

    const newUser = {
      name: name,
      email: email,
      phone: phone,
      age: age,
      gender: gender,
    };

    if (isValid) {
      setIsLoading(true);
      setUsers([...users, newUser]);
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <AddUser
        name={name}
        age={age}
        email={email}
        phone={phone}
        gender={gender}
        setName={setName}
        setEmail={setEmail}
        setGender={setGender}
        setPhone={setPhone}
        setAge={setAge}
        addNewUser={addNewUser}
        handleInputFields={handleInputFields}
        handleNumberedInputs={handleNumberedInputs}
        isLoading={isLoading}
      />
      <Table
        users={users}
        handleSearchKey={handleSearchKey}
        changePage={changePage}
        openModal={openModal}
        isLoading={isLoading}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        sortUsers={sortUsers}
        setUsersData={setUsersData}
      />
      <Modal
        title={<Text text="Delete user" weight={600} />}
        width={400}
        visible={visible}
        onCancel={closeModal}
        footer={false}
      >
        <ModalData>
          <ModalText>
            <Text text="Are u sure u want delete ?" weight={600} />
          </ModalText>
          <ModalActions>
            <Button onClick={closeModal}>Cancle</Button>
            <Button onClick={() => removeUser(selectedId)}>Yes</Button>
          </ModalActions>
        </ModalData>
      </Modal>
    </Wrapper>
  );
};
export default Dashboard;

import React from "react";
import styled from "styled-components";

import { Empty, Spin } from "antd";
import {
  DeleteOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

//Importig components
import TableFooter from "./partials/TableFooter";
import SearchUsers from "./partials/SearchUsers";
import Text from "components/Typography";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 10px #ececec;
  margin-left: 5%;
  overflow: hidden;
`;

const UserTableWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  td {
    padding: 1em;
    text-align: left;
  }
  thead {
    td {
      position: sticky;
      top: 0;
      background: #f7f7f7;
      z-index: 1;
    }
  }
  }
`;

const TableRow = styled.tr`
  background: ${(props) => (props.background ? props.background : "")};
`;

const TableHeaderData = styled.div`
  display: flex;
  align-items: center;
`;
const SortIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;

const UsersTable = ({
  users,
  changePage,
  openModal,
  isLoading,
  handleSearchKey,
  searchKey,
  setSearchKey,
  sortUsers,
  setUsersData,
}) => {
  return (
    <Wrapper>
      <SearchUsers
        searchKey={searchKey}
        handleSearchKey={handleSearchKey}
        setSearchKey={setSearchKey}
      ></SearchUsers>
      <UserTableWrapper>
        <Table>
          <thead>
            <tr>
              <td>
                <TableHeaderData>
                  <Text text="Name" />
                  <SortIconsWrapper>
                    <CaretUpOutlined onClick={() => sortUsers("nameAsc")} />
                    <CaretDownOutlined onClick={() => sortUsers("nameDsc")} />
                  </SortIconsWrapper>
                </TableHeaderData>
              </td>
              <td>
                <TableHeaderData>
                  <Text text="Email" />
                  <SortIconsWrapper>
                    <CaretUpOutlined onClick={() => sortUsers("emailAsc")} />
                    <CaretDownOutlined onClick={() => sortUsers("emailDsc")} />
                  </SortIconsWrapper>
                </TableHeaderData>
              </td>
              <td>
                <TableHeaderData>
                  <Text text="Age" />
                  <SortIconsWrapper>
                    <CaretUpOutlined onClick={() => sortUsers("ageAsc")} />
                    <CaretDownOutlined onClick={() => sortUsers("ageDsc")} />
                  </SortIconsWrapper>
                </TableHeaderData>
              </td>
              <td>
                <Text text="Phone" />
              </td>
              <td>
                <Text text="Gender" />
              </td>
              <td>
                <Text text="Action" />
              </td>
            </tr>
          </thead>
          <tbody>
            {users
              ?.filter((eachUser, id) =>
                eachUser.name
                  .toLocaleLowerCase()
                  .includes(searchKey.toLocaleLowerCase())
              )
              ?.map((eachUser, index) => {
                return (
                  <TableRow key={index} background={index % 2 ? "#f7f7f7" : ""}>
                    <td>
                      <Text text={eachUser.name} />
                    </td>
                    <td>
                      <Text text={eachUser.email} />
                    </td>
                    <td>
                      <Text text={eachUser.age} />
                    </td>
                    <td>
                      <Text text={eachUser.phone} />
                    </td>
                    <td>
                      <Text text={eachUser.gender} />
                    </td>
                    <td>
                      <DeleteOutlined onClick={() => openModal(index)} />
                    </td>
                  </TableRow>
                );
              })}
          </tbody>
          {isLoading && <Spin />}
        </Table>
      </UserTableWrapper>
      {users.length < 1 && <Empty />}
      <TableFooter
        changePage={setUsersData}
        isLoading={isLoading}
      ></TableFooter>
    </Wrapper>
  );
};

export default UsersTable;

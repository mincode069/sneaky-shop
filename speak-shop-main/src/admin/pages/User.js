import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import ShowUser from "../components/UserList/UserList";
import { getUsers } from "../../services/user-service";
import Modal from "../../user/components/Modal";
import "./User.scss";
function User() {
  const [listUser, setListUser] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

  const handleGetUser = async () => {
    try {
      const response = await getUsers();
      setListUser(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleEditUser = (id) => {
    setIdEdit(id);
    handleAddUser();
  };

  const handleChangeUserPerPage = (number) => {
    setUsersPerPage(number);
    setCurrentPage(1);
  };
  const handleChangePage = (number) => {
    setCurrentPage(number);
  };
  const pageNumbers = Array.from(
    new Array(Math.ceil(listUser.length / usersPerPage)),
    (_, i) => i + 1
  );
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = (currentPage - 1) * usersPerPage;
  console.log(indexOfFirstUser, indexOfLastUser);
  const listUserPage = listUser.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    handleGetUser();
    window.scrollTo(0, 0);
    console.log(listUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div class="user__container">
      <Modal visible={showAddUser} onCloseModal={() => setShowAddUser(false)}>
        <UserForm
          onGetUser={handleGetUser}
          show={showAddUser}
          onClose={handleAddUser}
          user={listUser.find((user) => user.id === idEdit)}
          onEdit={handleEditUser}
          isEdit={idEdit}
        />
      </Modal>

      <div class="user__title">
        <h1>Admin</h1>
        <button onClick={handleAddUser} class="custom-button">
          Add Admin
        </button>
      </div>
      <div class="user__table__feature right__side">
        <p>Admin per page : </p>
        <div>
          <input
            type="checkbox"
            id="5"
            onChange={() => handleChangeUserPerPage(5)}
            checked={usersPerPage === 5}
          />
          <label for="5">5</label>

          <input
            type="checkbox"
            id="10"
            onChange={() => handleChangeUserPerPage(10)}
            checked={usersPerPage === 10}
          />
          <label for="10">10</label>
        </div>
      </div>

      <div>
        <div class="user__table">
          <div>ID</div>
          <div>Name</div>
          <div>Email</div>
          <div>Password</div>
          <div>Action</div>
        </div>
        {listUserPage?.length > 0 &&
          listUserPage?.map((item, index) => {
            return (
              <ShowUser
                onGetUser={handleGetUser}
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                password={item.password}
                onEdit={handleEditUser}
              ></ShowUser>
            );
          })}
      </div>
      <div class="right__side">
        {pageNumbers.map((number) => (
          <button
            onClick={() => handleChangePage(number)}
            className={`number__page ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default User;

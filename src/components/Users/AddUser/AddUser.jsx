import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label forHTML="username">Username</label>
        <input id="username" type="text" name="username" />
        <label forHTML="age">Age</label>
        <input id="age" type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;

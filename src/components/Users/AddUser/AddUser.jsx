import React from "react";
import Card from "../../UI/Card/Card.jsx";
import classes from  "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label forHTML="username">Username</label>
        <input id="username" type="text" name="username" />
        <label forHTML="age">Age</label>
        <input id="age" type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;

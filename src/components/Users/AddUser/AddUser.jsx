import React, { useState } from "react";
import Card from "../../UI/Card/Card.jsx";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label forHTML="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label forHTML="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;

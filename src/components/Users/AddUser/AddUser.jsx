import React, { useState } from "react";
import Card from "../../UI/Card/Card.jsx";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error Occured",
        message: "Please nter non-empty values",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Error Occured",
        message: "Please enter valid age (>0)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
      setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;

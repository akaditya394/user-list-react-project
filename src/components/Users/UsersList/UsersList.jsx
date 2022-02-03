import React from "react";
import Card from "../../UI/Card/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} Years of age)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

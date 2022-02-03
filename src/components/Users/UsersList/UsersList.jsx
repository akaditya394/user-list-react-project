import React from "react";
import Card from "../../UI/Card/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} Years of age)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UsersList;

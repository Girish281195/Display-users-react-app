import React from "react";
import users from "../users.js";
import DisplayModal from "./Modal.js";

function createUser(user) {
  return (
    <DisplayModal
      name={user.real_name}
      activity_periods={user.activity_periods}
    />
  );
}
function ListOfUsers() {
  return (
    <div>
      {users.map(createUser)}
    </div>
  );
}

export default ListOfUsers;

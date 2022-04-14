import React from "react";
import useUsers from "../../Hook/useUsers";
import SingleUsers from "../SingleUsers/SingleUsers";

const Users = () => {
  const allUsers = useUsers("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="container row">
      {allUsers?.map((user) => (
        <SingleUsers key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;

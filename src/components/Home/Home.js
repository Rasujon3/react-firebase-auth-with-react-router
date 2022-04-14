import React from "react";
import { Link } from "react-router-dom";
import useUsers from "../../Hook/useUsers";
import SingleUsers from "../SingleUsers/SingleUsers";

const Home = () => {
  const usersData = useUsers("https://jsonplaceholder.typicode.com/users");
  if (usersData.length) {
    usersData.length = 4;
  }
  return (
    <div className="container">
      <h2>Total users {usersData.length}</h2>
      <div className="row">
        {usersData?.map((user) => (
          <SingleUsers key={user.id} user={user} />
        ))}
      </div>
      <Link to="/users">Load more....</Link>
    </div>
  );
};

export default Home;

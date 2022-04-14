import React from "react";
import { Link } from "react-router-dom";

const SingleUsers = ({ user, children }) => {
  const { name, id } = user || {};
  console.log(children);
  const { email, phone } = children || {};
  console.log(email, phone);
  return (
    <>
      <div className="col-4 gy-4">
        <div className="card shadow-sm p-3 mb-5 bg-body rounded">
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">ID: {id}</h6>
            {children && (
              <div>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Phone: {phone}</p>
              </div>
            )}
            <Link to={`/user/${id}`} className="card-link">
              User Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUsers;

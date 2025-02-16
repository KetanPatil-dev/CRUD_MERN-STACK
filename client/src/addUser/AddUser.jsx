import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>
      <h3>Add new User</h3>
      <form className="addUserForm ">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name "
            autoComplete="off"
            placeholder="Enter your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email "
            autoComplete="off"
            placeholder="Enter your Email"
          />

          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

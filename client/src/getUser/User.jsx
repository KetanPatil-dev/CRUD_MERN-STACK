import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="userTable">
      <button type="button" class="btn btn-primary">
        Add User <i class="fa-solid fa-user-plus"></i>
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
            <td>Ireland</td>
            <td className="actionButtons">
              <button type="button" class="btn btn-info">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>

              <button type="button" class="btn btn-danger">
                {" "}
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;

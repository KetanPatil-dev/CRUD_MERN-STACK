import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5959/api/users");

        setUsers(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);
    const deleteUser= async (userId)=>{
      try {
       const res= await axios.delete(`http://localhost:5959/api/delete/user/${userId}`)
         setUsers((res)=>res.filter((user)=>user._id!==userId))
         toast.success(res.data.message,{position:"top-right"})
      } catch (error) {
        console.error("ERROR",error)
        
      }
    }
  return (
    <div className="userTable">
      <Link to="/add" type="button" class="btn btn-primary">
        Add User <i class="fa-solid fa-user-plus"></i>
      </Link>
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
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  <Link to={`/update/`+user._id} type="button" class="btn btn-info">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>

                  <button onClick={()=>deleteUser(user._id)} type="button" class="btn btn-danger">
                    {" "}
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr> 
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;

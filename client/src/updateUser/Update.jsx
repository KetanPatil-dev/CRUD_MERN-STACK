import React, { useEffect, useState } from "react";
import "./Update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
    const [user, setUsers] = useState({
        name: "",
        email: "",
        address: "", // Include address in state
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUsers({ ...user, [name]: value });
    };

    async function updateUser() {
        try {
            const res = await axios.get(`http://localhost:5959/api/user/${id}`);
            setUsers(res.data)
            console.log("User Updated successfully")
        } catch (error) {
            console.error("Error", error);
        }
    }
    useEffect(() => {
        updateUser()
    }, [id])
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5959/api/update/user/${id}`, user);
            console.log("User Updated Successfully.");
            setUsers(res);
            toast.success(res.data.message, { position: "top-right" });
            navigate("/");
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="addUser">
            <Link to="/" type="button" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back
            </Link>
            <h3>Update User</h3>
            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={inputHandler}
                        autoComplete="off"
                        placeholder="Enter your Name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={inputHandler}
                        autoComplete="off"
                        placeholder="Enter your Email"
                    />
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={inputHandler}
                        autoComplete="off"
                        placeholder="Enter your Address"
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;

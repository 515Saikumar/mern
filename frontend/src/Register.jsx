import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
    const [UserName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            toast.error("Passwords do not match ❌");
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ UserName, email, password })
            });
            const data = await response.json();
            console.log(data);
            toast.info(data.message);
            if (response.ok) {
                toast.success("User registered successfully ✅");
            } else {
                toast.error("Server error ❌");
            }
        } catch (error) {
            toast.error("Network error ❌");
            console.error(error);
        }
    };
    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={UserName} onChange={(e) => setUserName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;
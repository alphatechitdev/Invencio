'use client';
import { RegisterCredsType } from "./Register.types";
import {useForm} from 'react-hook-form';
import './Register.css';
import axios from "axios";
import { useState } from "react";

const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<RegisterCredsType>();
    const [message, setMessage] = useState("");

    const handleRegister = async (creds:RegisterCredsType) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/Register`, {creds});
            if (response.data.success) {
                setMessage("Registration successful");
            } else if (!response.data.success) {
                setMessage("Registration failed");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="register-page">
            <div className="register-form-container">
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit(handleRegister)}>
                    <label>Full Name:</label>
                    <input type="text" {...register("fullname", {required:true})}/>
                    {errors.fullname && <p style={{color:'red'}}>{errors.fullname.message}</p>}

                    <label>Username:</label>
                    <input type="text" {...register("username", {required:true})}/>
                    {errors.username && <p style={{color:'red'}}>{errors.username.message}</p>}

                    <label>Email:</label>
                    <input type="email" {...register("email", {required:true})}/>
                    {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}

                    <label>Password:</label>
                    <input type="password" {...register("password", {required:true})}/>
                    {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}

                    <button type="submit">Register</button>

                </form>
            </div>
        </div>
    )
};


export default Register;
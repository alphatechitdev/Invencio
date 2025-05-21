'use client';

import axios from "axios";
import { LoginCredsType } from "./Login.types";
import {useForm} from 'react-hook-form'
import { useRouter } from "next/navigation";
import './Login.css';
import { useState } from "react";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm<LoginCredsType>();
    const router = useRouter();

    const handleLogin = async (creds:LoginCredsType) => {
       try {
         setLoading(true);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/Login`, {creds});
        if(!response.data.success) {
            setMessage(response.data.message);
            alert(response.data.message);
        } else {
            router.push('/Home');
        }
       } catch (error) {
        console.error("Error While Login, ", )
       }
    }

    return (
        <div className="login-page">
            <div className="login-form-container">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label>Username:</label>
                    <input type="text" {...register("username", {required:true})}/>
                    {errors.username &&  <p style={{color:"red"}}>{errors.username.message}</p>}
                    <label>Password</label>
                    <input type="password" {...register("password", {required:true})}/>
                    {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

                    <button type="submit">{loading? "Logging In" : "Login"}</button>
                </form>
            </div>
        </div>
    )
};

export default Login;
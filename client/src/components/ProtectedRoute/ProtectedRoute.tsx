"use client";

import { ReactNode, useEffect } from "react"
import useAuth from "../Context/AuthProvider"
import { useRouter } from "next/navigation";
import AuthLoading from "../Loading/AuthLoading";


export default function ProtectedRoute({children}:{children:ReactNode}){
    const {isAuthenticated} = useAuth();

    const router = useRouter();

    useEffect (() => {
        if(isAuthenticated == false) {
            router.push('/Login')
        }
    }, [isAuthenticated]);

    if(isAuthenticated == null) {
        return (
            <AuthLoading/>
        )
    }

    return (
        <>
        {children}
        </>
    )
};


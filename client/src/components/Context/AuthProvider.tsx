"use client";
import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { AuthContextTypes } from "./Auth.Context.Types";
import axios from "axios";


const AuthContext = createContext<AuthContextTypes|undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean|null>(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/protected/protected-route`, {withCredentials:true});
                if(response.data.success) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error While Protected Route, ", error);
                setIsAuthenticated(false);
            }
        }

        checkAuthentication();
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>
            {children}

        </AuthContext.Provider>
    )
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default useAuth;



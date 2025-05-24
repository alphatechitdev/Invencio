"use client";
import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { AuthContextTypes } from "./Auth.Context.Types";


const AuthContext = createContext<AuthContextTypes|undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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



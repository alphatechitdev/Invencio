
import { useContext, createContext, useState, useEffect } from "react";


const AuthContext = createContext<>();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();


    return (
        <AuthContext.pro
    )
}
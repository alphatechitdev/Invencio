import axios from "axios"
import { useEffect } from "react"
import useAuth from "../Context/AuthProvider"



export const ProtectedRoute = () => {

    const {isAuthenticated, setIsAuthenticated} = useAuth();

    
    useEffect(() => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/protected/protected-route`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials:true
            })

            if(!response.data.success) {
               
            }
        }
    })

}
import { AuthProvider } from "@/components/Context/AuthProvider";
import Header from "@/components/Header/Header";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { ReactNode } from "react";



export default function DashboardLayout ({children}: {children:ReactNode}) {
    return (
        <>
        <AuthProvider>
            <ProtectedRoute>
                <Header/>
                {children}
            </ProtectedRoute>
        </AuthProvider>
        </>
    )
}
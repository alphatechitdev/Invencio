
import Header from "@/components/Header/Header";
import { ReactNode } from "react";


export default function AuthLayout ({children}:{children:ReactNode}) {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}
import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

interface ProtectedProps {
   children: React.ReactElement
}

export default function  Protected(
   {children}: ProtectedProps
) {
   const { user} = useAuth();
   
   return user ? children : <Navigate to={"/cms/admin-login"} replace={true}/>
}
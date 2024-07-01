import { useContext, createContext, useMemo } from "react";
import {useLocalStorage} from "./useLocalStorage";
import {useNavigate} from "react-router-dom";

interface AuthContextProps {
   children: React.ReactElement
}

const AuthContext = createContext({});

export const AuthProvider = ({children}: AuthContextProps) => {
   const [user, setUser] = useLocalStorage('users', null)
   const navigate = useNavigate();
   
   const makeLogin = async(data:object) => {
      setUser(data)
      navigate('/cms/dashboard', {replace: true})
   }

   const makeLogOut = () => {
      setUser(null)
      navigate('/cms/admin-login', {replace: true})
   }

   const value = useMemo(() => ({user, makeLogin, makeLogOut}), [user])
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   return useContext(AuthContext)
}
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null)
    const router = useRouter()
    
    const logOut = () => {
        setUserDetails(null)
        localStorage.removeItem('userDetails')
        localStorage.removeItem('fantasi-cart')
        toast.success('Sign out successful')
        router.push('/')
    }

    useEffect(() => {
        const userDetails = localStorage.getItem('userDetails')
        if (userDetails) {
            setUserDetails(JSON.parse(userDetails))
        }
    }, [])
    const authInfo = {
        userDetails,
        setUserDetails,
        logOut
    }
    return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
}

export default AuthProvider
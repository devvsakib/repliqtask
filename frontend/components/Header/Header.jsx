import Link from "next/link"
import Layout from ".."
import ActiveLink from "./ActiveLink.jsx"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthProvider"
import useWindowSize from "@/hooks/useWindowSize"

const Header = () => {
    const [open, setOpen] = useState(false)
    const { userDetails, logOut } = useContext(AuthContext)
    const handleOpen = () => setOpen(!open)
    const windowSize = useWindowSize()

    useEffect(() => {
        if (windowSize.width > 768) {
            setOpen(false)
        }
    }, [windowSize])
    
    return (
        <div className="z-10 shadow-xl w-full bg-gray-800 backdrop-blur-sm text-white py-2">
            <Layout>
                <div className="navbar flex justify-between bg-base-100">
                    <div className="navbar-start">
                        {/* Mobile */}
                        {
                            open && <div className="absolute top-[70px] b bg-base-100 p-5 rounded-lg shadow-xl shadow-[#08A5EB]/20 w-[90%] block md:hidden bg-gray-800">
                                <ul className="menu grid rounded-box w-[100%]">
                                    <ActiveLink href={"/"}>
                                        <li onClick={handleOpen} className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700">
                                            Home
                                        </li>
                                    </ActiveLink>
                                    <ActiveLink href={"/cart"}>
                                        <li onClick={handleOpen} className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700">
                                            Cart
                                        </li>
                                    </ActiveLink>
                                    {
                                        userDetails ?
                                            <>
                                                {userDetails?.usertype === "admin" ? <li onClick={handleOpen} className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700"><ActiveLink href={"/admin"}>Admin</ActiveLink></li>
                                                    :
                                                    <li onClick={handleOpen} className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700"><ActiveLink href={"/customer"}>My Profile</ActiveLink></li>}
                                                <li className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700"><button onClick={logOut}>Logout</button></li>
                                            </> :
                                            <li onClick={handleOpen} className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700"><ActiveLink href={"/login"}>Login</ActiveLink></li>
                                    }
                                </ul>
                            </div>
                        }
                        <div className="flex gap-2 items-center">
                            <img className="w-24" src="/logo.png" alt="" />
                        </div>
                    </div>
                    {/* Desktop Navbar */}
                    <div className="navbar-center items-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-10">
                            <li><ActiveLink href={"/"}>Home</ActiveLink></li>
                            <li><ActiveLink href={"/cart"}>Cart</ActiveLink></li>
                            {
                                userDetails ?
                                    <>
                                        {userDetails.usertype === "admin" ? <li><ActiveLink href={"/admin"}>Admin</ActiveLink></li>
                                            :
                                            <li><ActiveLink href={"/customer"}>My Profile</ActiveLink></li>}
                                        <li><button onClick={logOut}>Logout</button></li>
                                    </> :
                                    <li><ActiveLink href={"/login"}>Login</ActiveLink></li>
                            }
                        </ul>
                    </div>
                    <button onClick={handleOpen} className="btn btn-ghost md:hidden ml-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                </div>
            </Layout>
        </div>
    )
}

export default Header
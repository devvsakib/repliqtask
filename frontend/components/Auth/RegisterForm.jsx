import api from '@/lib/API'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from "next/router";

const RegisterForm = () => {
    
    const [phone, setPhone] = useState('')
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false)
    const [error, setError] = useState('')
    const isValidPhoneNumber = /^(?:\+88|88)?(01[3-9]\d{8})$/; // Bangladeshi phone number regx
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
        name: "",
        username: "",
        phoneNumber: "",
        password: "",
        type: "customer"
    })
    const router = useRouter()
    const handlePhone = (e) => {
        const { value } = e.target;
        if (isValidPhoneNumber.test(value)) {
            setError('')
            setPhone(value)
            setUser ({
                ...user,
                phoneNumber: value
            })
            setIsPhoneNumberValid(true)
        } else {
            setError('Invalid phone number')
            setPhone(value)
            setUser ({
                ...user,
                phoneNumber: value
            })
            setIsPhoneNumberValid(false)
        }
    };

    const getUserData = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleRegister = e => {
        e.preventDefault()

        setIsLoading(true)
        if (user.password === user.confirmpassword) {
            api.post("user/register", user)
                .then(res => {
                    console.log(res);
                    if (res.status === 201) {
                        router.push('/login')
                        setSuccess(true)
                        toast.success(res.data.message, {
                            duration: 3000,
                        })
                    } else {
                        setSuccess(true)
                        toast.error(res.data.message, {
                            duration: 3000,
                        })
                    }
                    setIsLoading(false)
                })
                .catch(error => {
                    toast.error(error.response.data.message)
                  })
        }
        else {
            toast.error("Password doesn't match", {
                duration: 3000,
            })
            setIsLoading(false)
        }
    }



    return (
        <div className="flex-col shadow-2xl rounded-md p-5 md:p-5 my-20">
            <div className="pt-5 lg:text-left">
                <h1 className="text-2xl font-bold mb-5">Register</h1>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm">
                <form onSubmit={handleRegister} className="flex flex-col gap-2">
                    <div>
                        <input onChange={getUserData} type="text" name='name' placeholder="Full Name" className="outline-none border-b p-2 w-full" required />
                        <input onChange={getUserData} type="text" name='username' placeholder="username" className="outline-none border-b p-2 w-full" required />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            id="phone"
                            name="phoneNumber"
                            value={phone}
                            onChange={handlePhone}
                            required
                            placeholder="Phone Number" className="outline-none border-b p-2 w-full" />
                        <button type='button' className='absolute text-xs font-bold  right-0  bottom-2 bg-gray-500 rounded-full text-white w-4 h-4 flex items-center justify-center group'>
                            ?
                            <span
                                className='hidden group-hover:block absolute bg-gray-500 text-white px-2 py-1 rounded-md text-xs bottom-0 right-0 transform translate-x-1/5 -translate-y-5  w-[200px]'
                            >Only Bangladeshi Number</span>
                        </button>
                        {error && <p className="text-muted">{error}</p>}
                    </div>
                    <div className="">
                        <input onChange={getUserData} type="password" name='password' placeholder="Password" className="outline-none border-b p-2 w-full" required />
                        <input onChange={getUserData} type="password" name='confirmpassword' placeholder="Confirm Password" className="outline-none border-b p-2 w-full" required />
                    </div>
                    <div className="my-6">
                        <button
                            className={`bg-gray-300 ${isPhoneNumberValid
                                ? 'hover:bg-gray-500 hover:text-white transition-colors durations-100 ease-linear rounded font-semibold w-full py-2 px-10 rounded-5'
                                : 'cursor-not-allowed opacity-50 rounded font-semibold w-full py-2 px-10 rounded-5'
                                }`}
                            disabled={!isPhoneNumberValid}
                        >
                            Register</button>
                    </div>
                    <div className="flex items-center gap-3">
                        <p>Already have an account?</p>
                        <Link href={'/login'}>
                            <button type="button" className="btn btn-outline-primary">
                                Login
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
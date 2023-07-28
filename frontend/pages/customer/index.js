import Layout from '@/components';
import { AuthContext } from '@/context/AuthProvider'
import { useContext } from 'react'

const Customer = () => {
    const { userDetails } = useContext(AuthContext)
    return (
        <Layout>
            <div className='my-32'>
                <h2 className='text-3xl font-semibold font-oswald'>Customer Area</h2>
                <div>
                    <h3 className='text-xl mt-5 font-semibold font-oswald'>Welcome, {userDetails?.name}</h3>
                    <div>
                        <p className='text-lg font-semibold font-oswald'>Your Details</p>
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-oswald'>Name: {userDetails?.name}</p>
                            <p className='text-lg font-oswald'>Username: {userDetails?.username}</p>
                            <p className='text-lg font-oswald'>Phone: {userDetails?.phone}</p>
                            <p className='text-lg font-oswald'>Role: {userDetails?.usertype}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Customer
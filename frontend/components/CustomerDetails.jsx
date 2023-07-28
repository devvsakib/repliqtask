const CustomerDetails = ({ customer }) => {
  return (
    <div className='my-32'>
      <h2 className='text-3xl font-semibold font-oswald'>Customer Area</h2>
      <div>
        <h3 className='text-xl mt-5 font-semibold font-oswald'>Welcome, {customer?.name}</h3>
        <div>
          <p className='text-lg font-semibold font-oswald'>Your Details</p>
          <div className='flex flex-col gap-2'>
            <p className='text-lg font-oswald'>Name: {customer?.name}</p>
            <p className='text-lg font-oswald'>Username: {customer?.username}</p>
            <p className='text-lg font-oswald'>Phone: {customer?.phoneNumber}</p>
            <p className='text-lg font-oswald'>Role: {customer?.type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails
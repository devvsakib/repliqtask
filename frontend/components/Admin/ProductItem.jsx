import React from 'react'

const ProductItem = ({ item }) => {
    return (
        <div className="flex items-center justify-between bg-gray-100 py-4 rounded-lg md:mr-32 px-10">
            <div className=''>
                <img className='w-12' src={item?.image} alt="prod img" />
            </div>
            <div className='text-left'>

            <h2>{item?.model}</h2>
            </div>
            <div className='review-details'>
                <p>Price: ${item?.price}</p>
            </div>
        </div>
    )
}

export default ProductItem
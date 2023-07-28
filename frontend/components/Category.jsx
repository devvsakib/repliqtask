import React from 'react'

const Category = ({category}) => {
    return (
        <div className="bg-gray-100 rounded-md p-5">
            <div className="flex py-5 mb-4 rounded-md bg-white justify-center">
                <img className="w-24 md:w-32" src={category.image} alt="" />
            </div>
            <div className="mb-1">
                <p>Brand: <b>{category.brand}</b></p>
            </div>
        </div>
    )
}

export default Category
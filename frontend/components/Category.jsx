import React from 'react'
import { motion } from 'framer-motion'
const Category = ({ category }) => {
    return (

        <motion.div
            initial={{ opacity: 0, y: "30%" }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 rounded-md p-5">
            <div className="flex py-5 mb-4 rounded-md bg-white justify-center">
                <img className="w-24 md:w-32" src={category.image} alt="" />
            </div>
            <div className="mb-1">
                <p>Brand: <b>{category.brand}</b></p>
            </div>
        </motion.div>
    )
}

export default Category
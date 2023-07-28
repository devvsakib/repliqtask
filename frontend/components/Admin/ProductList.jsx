import api from '@/lib/API'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
const ProductList = ({products}) => {

    return (
        <div>
            {!products.length && <h1 className='mt-10'>No Product Found</h1>}
            <ul>
                {products && products.map((product, idx) => (<li className='mt-5' key={idx}>
                    <ProductItem item={product} />
                </li>))}
            </ul>
        </div>
    )
}

export default ProductList
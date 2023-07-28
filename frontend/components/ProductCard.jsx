import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-5 hover:scale-105 ease-linear duration-100">
      <div className="flex flex-col justify-center ">
        <Link href={`/products/${product?.slug}`}>
          <div className='bg-white p-4 rounded'>
            <img src={product.image} alt={product.name} className="w-40 mx-auto mb-3 h-40 object-contain" />
          </div>
          <div className="flex justify-between mt-5 items-center">
            <div>
              <h2>{product.model}</h2>
              <h2>Brand: {product.brand}</h2>
            </div>
            <h2 className="font-semibold text-xl">${product.price}</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
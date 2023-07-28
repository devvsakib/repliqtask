import Layout from '@/components'
import CartItem from '@/components/CartItem'
import { CartContext } from '@/context/CartProvider'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const cart = () => {
  const [loading, setLoading] = useState(false)
  const { cartItems } = useContext(CartContext)
  const handlePayment = () => { }

  return (
    <Layout>
      <div className='w-[100%] grid  md:grid-cols-3 mt-16 mb-20 gap-10'>
        {/* Cart Items Start */}
        <div className='col-span-3 md:col-span-2 flex flex-col gap-3 md:gap-10'>
          {
            cartItems?.length > 0 ?
              cartItems?.map((item, index) => (
                <CartItem key={index} item={item} />
              )) : (
                <div className='flex flex-col items-center justify-center h-full'>
                  <Image
                    src='/empty-cart.png'
                    alt='Empty Cart'
                    width={200}
                    height={200}
                  />
                  <h1 className='text-2xl font-bold mt-5'>Your cart is empty</h1>
                </div>
              )
          }
        </div>
        {/* Cart Items END */}
        {/* Summary Start */}
        <div className="col-span-3 md:col-span-1">
          <div className="text-lg font-bold">Summary</div>
          <div className="p-5 my-5 bg-gray-100 rounded-xl">
            <div className="flex justify-between">
              <div className="uppercase text-md md:text-lg font-medium text-black">
                Subtotal
              </div>
              <div className="text-md md:text-lg font-medium text-black">
                ${cartItems?.reduce((acc, item) => acc + item.price, 0)}
              </div>
            </div>
            <div className="text-sm md:text-md py-5 border-t mt-5">
              The subtotal reflects the total price of
              your order, including duties and taxes,
              before any applicable discounts. It does
              not include delivery costs and
              international transaction fees.
            </div>
          </div>

          {/* BUTTON START */}
          <button
            className={`w-full py-4 rounded-full text-white text-lg font-medium transition-transform active:scale-95 mb-3 flex bg-black items-center gap-2 justify-center ${cartItems.length ? 'hover:opacity-75' : ' opacity-75 '}`}
            onClick={handlePayment}
          >
            Checkout
            {loading && <Image src="/spinner.svg" width={50} height={50} />}
          </button>
          {/* BUTTON END */}
        </div>
        {/* SUMMARY END */}
      </div>
    </Layout>
  )
}

export default cart
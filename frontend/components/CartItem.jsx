import { CartContext } from '@/context/CartProvider'
import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext)
    return (
        <div className="flex items-center justify-between bg-gray-100 py-4 rounded-lg md:mr-32 px-10">
            <div>
                <img className='w-12 md:w-24' src={item?.image} alt="prod img" />
            </div>
            <div className='text-sm'>
                <h2>{item?.model}</h2>
                <p>Price: ${item?.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.slug)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItem
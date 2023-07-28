import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('fantasi-cart')) || []
    setCartItems(cartItems)
  }, [])

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('fantasi-cart')) || []
    const itemIndex = cartItems.find((item) => item.slug === product.slug)
    if (!itemIndex) {
      const newCartItems = [...cartItems, product]
      setCartItems(newCartItems)
      localStorage.setItem('fantasi-cart', JSON.stringify(newCartItems))
      toast.success("Added To Cart");
    }
    else{
      toast.error("Already Added")
    }
  }

  const removeFromCart = (productSlug) => {
    const cartItems = JSON.parse(localStorage.getItem('fantasi-cart')) || []
    setCartItems(cartItems.filter((item) => item.slug !== productSlug))
    localStorage.setItem('fantasi-cart', JSON.stringify(cartItems.filter((item) => item.slug !== productSlug)))    
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('fantasi-cart')
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

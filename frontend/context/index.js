import AuthProvider from "./AuthProvider"
import { CartProvider } from "./CartProvider"

const ContextProvider = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </AuthProvider>
    )
}

export default ContextProvider
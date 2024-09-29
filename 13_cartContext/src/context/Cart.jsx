import { createContext } from 'react'

const CartContext = createContext(null)

export const CartProvider = (props) => {
    return (
    <CartContext.Provider>
        {this.props.children}
    </CartContext.Provider>
    )
}
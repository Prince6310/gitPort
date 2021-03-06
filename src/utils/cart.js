export const TAX_RATE = process.env.TAX_RATE || 0.1

export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const getCart = () => {
    try {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            return cart
        }

    } catch (err) {
        return []
    }

    return []
}


export const cartSubtotal = (cart) => {
    //Sum up all of the individual product costs
    const subTotal = cart.reduce((counter, product) => {
        return counter + product.price_in_cent * product.qty
    }, 0)

    return subTotal
}


export const cartTotal = (cart) => {
    if (cart.length === 0) {
        return 0
    }

    const subTotal = cartSubtotal(cart)

    const total = subTotal + subTotal * TAX_RATE

    return Math.round(total)
}
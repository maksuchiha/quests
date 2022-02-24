const cart = (openCart, cartModalId, closeCart) => {
    const cartBtn = document.querySelector(`.${openCart}`)
    const cart = document.getElementById(`${cartModalId}`)
    const closeBtn = cart.querySelector(`.${closeCart}`)


    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex'
    })

    closeBtn.addEventListener('click', () => {
        cart.style.display = ''
    })
}

export default cart
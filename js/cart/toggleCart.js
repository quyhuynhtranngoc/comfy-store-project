import { getElement } from "../utils.js";

const toggleCart = getElement('.toggle-cart');
const cartOverlay = getElement('.cart-overlay');
const cartClose = getElement('.cart-close');

toggleCart.addEventListener('click', () => {
    cartOverlay.classList.add('show');
})

cartClose.addEventListener('click', () => {
    cartOverlay.classList.remove('show');
})


import { findProduct } from "../store.js";
import { formatPrice, getElement, getStorageItem, setStorageItem } from "../utils.js";
import addToCartDOM from "./addToCartDOM.js";
import { openCart } from "./toggleCart.js";

let cart = getStorageItem('cart');
const cartItemCountDOM = getElement('.cart-item-count');
const cartTotalDOM = getElement('.cart-total');

export const addToCart = (id) => {
    let item = cart.find(cartItem => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        addToCartDOM(product);
    } else {
        // update values
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
    openCart();
}

function displayCartItemCount() {
    const amount = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0);
    cartItemCountDOM.textContent = amount;
}
function displayCartTotal() {
    let total = cart.reduce((total, cartItem) => {
        return (total += cartItem.price * cartItem.amount);
    }, 0);
    cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
}

function displayCartItemsDOM() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
}
function setupCartFunctionality() {

}

const init = () => {
    displayCartItemCount();
    displayCartTotal();
    displayCartItemsDOM();
    setupCartFunctionality();

}

init();
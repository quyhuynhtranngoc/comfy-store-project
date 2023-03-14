import { findProduct } from "../store.js";
import { getStorageItem } from "../utils.js";
import addToCartDOM from "./addToCartDOM.js";
import { openCart } from "./toggleCart.js";

let cart = getStorageItem('cart');

export const addToCart = (id) => {
    let item = cart.find(cartItem => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        addToCartDOM(product);
        console.log(cart);
    } else {
        // update values
    }

    openCart();
}

const init = () => {
    console.log(cart);
}

init();
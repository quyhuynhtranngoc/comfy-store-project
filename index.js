import './js/toggleSidebar.js';
import './js/cart/toggleCart.js';
import fetchProducts from './js/fetchProducts.js';

const init = async () => {
    const products = await fetchProducts();
    console.log(products);
}

window.addEventListener('DOMContentLoaded', init)
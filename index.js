import './js/toggleSidebar.js';
import './js/cart/toggleCart.js';
import fetchProducts from './js/fetchProducts.js';
import { setupStore, store } from './js/store.js';

const init = async () => {
    const products = await fetchProducts();
    if (products) {
        // add products to the store
        setupStore(products);
        console.log(store);
    }
};

window.addEventListener('DOMContentLoaded', init)
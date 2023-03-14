import './js/toggleSidebar.js';
import './js/cart/toggleCart.js';
import fetchProducts from './js/fetchProducts.js';
import { setupStore, store } from './js/store.js';
import display from './js/displayProducts.js';
import { getElement } from './js/utils.js';

const init = async () => {
    const products = await fetchProducts();
    if (products) {
        // add products to the store
        setupStore(products);
        const featured = store.filter((product) => product.featured === true);
        display(featured, getElement('.featured-center'));
    }
};

window.addEventListener('DOMContentLoaded', init)
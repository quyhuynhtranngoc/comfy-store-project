import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import { getElement, singleProductUrl } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');


// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
    const urlID = window.location.search;
    try {
        const response = await fetch(`${singleProductUrl}${urlID}`);
        if (response.status >= 200 && response.status <= 299) {
            const product = await response.json();
            console.log(product);
        } else {
            console.log(response.status, response.statusText);
            centerDOM.innerHTML = `
                <div>
                <h3 class="error">sorry, something went wrong</h3>
                <a href="index.html" class="btn">back home</a>
                </div>
            `
        }
    } catch (err) {
        console.log(err);
    }


    loading.style.display = 'none';
});
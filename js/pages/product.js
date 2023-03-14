import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import { getElement, singleProductUrl } from '../utils.js';

// selections
const loading = getElement('.page-loading');

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
    const urlID = window.location.search;
    const response = await fetch(`${singleProductUrl}${urlID}`);
    console.log(response);
    loading.style.display = 'none';
});
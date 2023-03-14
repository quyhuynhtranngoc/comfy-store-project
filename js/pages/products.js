import '../toggleSidebar.js';
import '../cart/toggleCart.js';

import display from '../displayProducts.js';
import { store } from '../store.js'
import { getElement } from '../utils.js';
display(store, getElement('.products-container'));
const loading = getElement('.page-loading');
loading.style.display = 'none';
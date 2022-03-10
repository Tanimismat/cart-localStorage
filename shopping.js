const displayLocalStorageCart = () => {
    // 1. cart take pete hobe
    const cart = getCart();
    for (const product in cart) {
        displayProduct(product);
    }
}
// ei function k call korte hobe getCart initialize hower por

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    // empty value add na kora
    if (!name) {
        return;
    }
    // display in the UI
    // have to pass parameter 
    displayProduct(name)

    // add to local storage
    addProductToCart(name)

    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li);
}
// checking if cart is already in local storage
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
//
const addProductToCart = name => {
    const cart = getCart();
    // cart[name] = 1;
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}

displayLocalStorageCart()

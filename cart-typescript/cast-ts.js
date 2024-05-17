var cart = [];
function addItem(itemName) {
    var existingItem = cart.find(function (item) { return item.name === itemName; });
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        cart.push({ name: itemName, quantity: 1 });
    }
    updateCartDisplay();
}
function removeItem(itemName) {
    var itemIndex = cart.findIndex(function (item) { return item.name === itemName; });
    if (itemIndex > -1) {
        cart[itemIndex].quantity--;
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartDisplay();
}
function updateCartDisplay() {
    var cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cart.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = "".concat(item.name, " (x").concat(item.quantity, ") ");
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () { return removeItem(item.name); };
        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
    });
}
// Expose functions to the global scope
window.addItem = addItem;
window.removeItem = removeItem;

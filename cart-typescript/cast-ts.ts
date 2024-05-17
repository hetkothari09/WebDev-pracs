interface CartItem {
    name: string;
    quantity: number;
}

let cart: CartItem[] = [];

function addItem(itemName: string): void {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, quantity: 1 });
    }
    updateCartDisplay();
}

function removeItem(itemName: string): void {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        cart[itemIndex].quantity--;
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartDisplay();
}

function updateCartDisplay(): void {
    const cartItemsElement = document.getElementById('cartItems') as HTMLElement;
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (x${item.quantity}) `;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(item.name);

        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
    });
}

// Expose functions to the global scope
(window as any).addItem = addItem;
(window as any).removeItem = removeItem;

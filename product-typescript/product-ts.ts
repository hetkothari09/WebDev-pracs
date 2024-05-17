interface Product {
    name: string,
    price: number,
    description: string
}

function displayProductDetails(product: Product): void {
    const productDetailsElement = document.getElementById('product-details');
    if(productDetailsElement){
        productDetailsElement.innerHTML += `
        <h2> Product Details: </h2>
        <p><strong>Name: </strong> ${product.name}</p>
        <p><strong>Price: </strong> $${product.price.toFixed(2)}</p>
        <p><strong>Description: </strong> ${product.description}</p>
        `;
    }
}

const product1:Product = {
    name: 'PS5 Controller',
    price: 4000,
    description: 'Adaptive triggers!'
}
const product2:Product = {
    name: 'FIFA24',
    price: 3999,
    description: 'Best Game!'
}

document.addEventListener('DOMContentLoaded', () => {
    displayProductDetails(product1);
    displayProductDetails(product2);
})
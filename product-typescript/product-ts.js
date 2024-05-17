function displayProductDetails(product) {
    var productDetailsElement = document.getElementById('product-details');
    if (productDetailsElement) {
        productDetailsElement.innerHTML += "\n        <h2> Product Details: </h2>\n        <p><strong>Name: </strong> ".concat(product.name, "</p>\n        <p><strong>Price: </strong> $").concat(product.price.toFixed(2), "</p>\n        <p><strong>Description: </strong> ").concat(product.description, "</p>\n        ");
    }
}
var product1 = {
    name: 'PS5 Controller',
    price: 4000,
    description: 'Adaptive triggers!'
};
var product2 = {
    name: 'FIFA24',
    price: 3999,
    description: 'Best Game!'
};
document.addEventListener('DOMContentLoaded', function () {
    displayProductDetails(product1);
    displayProductDetails(product2);
});

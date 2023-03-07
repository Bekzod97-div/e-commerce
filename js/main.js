// Cart togle

const elButtonCart = document.querySelector('.cart');
const elCartContent = document.querySelector('.cart-table');

if (elButtonCart) {
    elButtonCart.addEventListener('click', function () {
        elCartContent.classList.toggle('cart-table__active');
    });
}

// Product adding function
// Get the plus and minus buttons and the quantity input field
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const quantityInput = document.querySelector('input[name="name"]');

// Get the price of the product
const price = parseFloat(document.querySelector('.price').innerHTML.replace('$', ''));

// Add event listener to plus button
plusBtn.addEventListener('click', function() {
    // Increase quantity by 1
    quantityInput.value++;

    // Update price
    document.querySelector('.price').innerHTML = '$' + (price * quantityInput.value).toFixed(2);
});

// Add event listener to minus button
minusBtn.addEventListener('click', function() {
    // Decrease quantity by 1 if greater than 1
    if (quantityInput.value > 0) {
        quantityInput.value--;

        // Update price
        document.querySelector('.price').innerHTML = '$' + (price * quantityInput.value).toFixed(2);
    }
});

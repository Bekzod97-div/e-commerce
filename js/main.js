const elButtonCart = document.querySelector('.cart');
const elCartContent = document.querySelector('.cart-table');
const elAddCart = document.querySelector('.hero__btn-cart');
const elContentRemover = document.querySelector('.cart-info__btn');
const elContentInfo = document.querySelector('.cart-info__item');
const elContentText = document.querySelector('.cart-table__content-text');
const cartCount = document.querySelector('.cart__counter');

// Cart togle
if (elButtonCart) {
    elButtonCart.addEventListener('click', function () {
        elCartContent.classList.toggle('cart-table__active');
    });
}

// Add cart button
if (elAddCart) {
    elAddCart.addEventListener('click', function () {
        elContentInfo.classList.add('cart-info__item-active');
        elContentText.classList.add('cart-table__content-text__active');
        cartCount.classList.add('cart__counter-active');
    });
}

// Remove cart buton
if (elContentRemover) {
    elContentRemover.addEventListener('click', function () {
        elContentInfo.classList.remove('cart-info__item-active');
        elContentText.classList.remove('cart-table__content-text__active');
        cartCount.classList.remove ('cart__counter-active');

    });
}

// Product adding function
function updateCartCount() {
    cartCount.textContent = quantityInput.value ;
  }
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
     // Update cart count
     updateCartCount();

    // Update price
    document.querySelector('.price').innerHTML = '$' + (price * quantityInput.value).toFixed(2);
});

// Add event listener to minus button
minusBtn.addEventListener('click', function() {
    // Decrease quantity by 1 if greater than 1
    if (quantityInput.value > 0) {
        quantityInput.value--;
        updateCartCount();

        // Update price
        document.querySelector('.price').innerHTML = '$' + (price * quantityInput.value).toFixed(2);
    }

});

// Image showcase functionality
const btns = document.querySelectorAll('.img-showcase__btn');
const mainImg = document.querySelector('.img-showcase--big__img');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove the active class from all buttons
    btns.forEach(btn => btn.classList.remove('img-showcase__btn-active'));
    // add the active class to the clicked button
    btn.classList.add('img-showcase__btn-active');
    // set the main image source to the data-image attribute of the clicked button
    mainImg.setAttribute('src', btn.getAttribute('data-image'));
  });
});

// Lightbox Modal
const elExitButton = document.querySelector('.exit-btn');
const elModal = document.querySelector('.modal');
const elModalOpenButton = document.querySelector('.modal-open__btn');

if (elExitButton) {
    elExitButton.addEventListener('click', () => {
        //Remove js-modal class
        elModal.classList.remove('js-modal');
    } );
}

// Modal opener
if (elModalOpenButton) {
    elModalOpenButton.addEventListener('click', () => {
        //Add js-modal class
        elModal.classList.add('js-modal');
    } );
}

// Modal image slider
const imgWrapper = document.querySelector('.modal__img-showcase--big');
const imgButtons = document.querySelectorAll('.img-showcase__btn');
let currentImg = 0;

function showImg(index) {
  imgWrapper.innerHTML = `<img class="img-showcase--big__img modal__img-showcase--big__img" src="${imgButtons[index].getAttribute('data-image')}" alt="sneakers" width="550" height="550">`;
}

function next() {
  currentImg++;
  if (currentImg >= imgButtons.length) {
    currentImg = 0;
  }
  showImg(currentImg);
}

function previous() {
  currentImg--;
  if (currentImg < 0) {
    currentImg = imgButtons.length - 1;
  }
  showImg(currentImg);
}

document.querySelector('.right-slider').addEventListener('click', next);
document.querySelector('.left-slider').addEventListener('click', previous);

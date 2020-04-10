new WOW().init();



const cartButton = document.querySelector("#cart-btn");


const modal = document.querySelector(".modal");

const closeButton = document.querySelector(".close-btn");



cartButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);
  

function toggleModal() {
  modal.classList.toggle("is-open");
}


const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container')
// Hàm hiện modal
function showBuyTickets() {
    modal.classList.add('open')
};

// Hàm ẩn modal
function hideBuyTickets() {
    modal.classList.remove('open')
};

for (const buyBtn of buyBtns) {
     buyBtn.addEventListener('click', showBuyTickets)
 };

 modalClose.addEventListener('click', hideBuyTickets);
 modal.addEventListener('click', hideBuyTickets);
 modalContainer.addEventListener('click', function(event) {
     event.stopPropagation();
 })
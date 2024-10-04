AOS.init({
    duration: 1200
  });
  


const modal = document.getElementById('waitlist-modal');
const closeModalBtn = document.getElementById('close-btn');


const openModalBtns = document.querySelectorAll('.open-modal');


openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex'; 
    });
});


closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

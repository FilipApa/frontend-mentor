const shareBtn = document.getElementById('share-btn');
const shareSection = document.getElementById('card-share');

shareBtn.addEventListener('click',() => {
    shareSection.classList.toggle('show');
    shareBtn.classList.toggle("change-color");
});
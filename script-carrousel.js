const photos = document.querySelectorAll('.photo');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        const imgSrc = photo.querySelector('img').src;
        modalImage.src = imgSrc;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

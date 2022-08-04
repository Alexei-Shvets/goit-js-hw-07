import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const markupGallery = galleryItems.map((item) =>
    `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    alt="${item.description}"/>
    </a>`).join("");

gallery.insertAdjacentHTML("afterbegin", markupGallery)

new SimpleLightbox('.gallery a', {
    captions: true, 
    captionsData: 'alt',  //откуда берем 
    captionPosition: 'bottom',
    captionDelay: 250})
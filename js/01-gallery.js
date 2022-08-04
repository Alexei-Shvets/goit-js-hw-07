import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)

const gallery = document.querySelector('.gallery');

const markupGallery = galleryItems.map((item) =>
    `<div class ="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    data-source="${item.original}" alt="${item.description}"/>
    </a>
    </div>`).join("");

gallery.insertAdjacentHTML("afterbegin", markupGallery)


gallery.addEventListener("click", clickedImg)

function clickedImg(event) {  //event это тот элемент, который мы вызвали
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
    return 
}

    const selectedImg = event.target.dataset.source //стучим в двери дата-соурса (11 строка)
    const modalImg = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">`)
    modalImg.show()

    gallery.addEventListener("keydown", keyboardEsc)
    
function keyboardEsc(event) {
    if(event.key === "Escape") {
        return modalImg.close(() => {
            gallery.removeEventListener("keydown", keyboardEsc)
        })
    }
}
}


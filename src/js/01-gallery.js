// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryImageMarkup = createGallerySheet(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryImageMarkup);

function createGallerySheet (image) {
    return image
    .map(({preview, original, description}) => {
        return `
        <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`;
    }).join("");
    
    };

let openImage = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250});
openImage.on('show.simplelightbox')

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
};

const galleryCards = galleryItems.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

galleryList.insertAdjacentHTML("beforeend", galleryCards.join(""));

let  lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250, 
});




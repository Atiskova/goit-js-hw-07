import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
};

const galleryCards = galleryItems.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

galleryList.insertAdjacentHTML("beforeend", galleryCards.join(""));

const instance = basicLightbox.create(`
    <img class="gallery__image" src="" width="800" height="600">
    `,
  {
    onShow: instance => { window.addEventListener('keydown', onEscClick) },
    
    onClose: instance => { window.removeEventListener('keydown', onEscClick) }
  }
);


const onGalleryImglick = event => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }


  instance.element().querySelector('img').src = target.dataset.source;

    instance.show();
};

galleryList.addEventListener('click', onGalleryImglick);


function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
    return;
  }
};

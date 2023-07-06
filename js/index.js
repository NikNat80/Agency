const images = document.querySelectorAll('.product__photo');
const imageTemplate = document.querySelector('#image');
const links = document.querySelector('.products__link');
const linkAll = document.querySelector('.link_all');
const linkRoom = document.querySelector('.link_room');
const linkKitchen = document.querySelector('.link_kitchen');
const linkBedroom = document.querySelector('.link_bedroom');
const linkBabyroom = document.querySelector('.link_babyroom');
const productsSection = document.querySelector('.products__content');
const roomPictures =['./img/room_kaktus.jpg', './img/room_grey.jpg'];
const kitchenPictures =['./img/kitchen_flower.jpg', './img/kitchen_grey.jpg'];
const bedroomPictures =['./img/bedroom_gold.jpg', './img/bedroom_vip.jpg'];
const babyroomPictures =['./img/tin_room.jpg', './img/babyroom.jpg'];
const allPictures = ['./img/room_kaktus.jpg', './img/room_grey.jpg', './img/kitchen_flower.jpg', './img/kitchen_grey.jpg','./img/bedroom_gold.jpg', './img/bedroom_vip.jpg', './img/tin_room.jpg', './img/babyroom.jpg']

function createTemplate(link) {
    const image = imageTemplate.content.cloneNode(true);
    const imageTag = image.querySelector('.product__photo');
    imageTag.src = link;
    return imageTag;
}

roomPictures.forEach((picture) => {
    productsSection.append(createTemplate(picture));
});

kitchenPictures.forEach((kitchen) => {
    productsSection.append(createTemplate(kitchen));
});

bedroomPictures.forEach((bedroom) => {
    productsSection.append(createTemplate(bedroom));
});

babyroomPictures.forEach((babyroom) => {
    productsSection.append(createTemplate(babyroom));
});

linkRoom.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.innerHTML = '';
    roomPictures.forEach((picture) => {
        productsSection.append(createTemplate(picture));
    });
})

linkKitchen.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.innerHTML = '';
    kitchenPictures.forEach((picture) => {
        productsSection.append(createTemplate(picture));
    })
})

linkBedroom.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.innerHTML = '';
    bedroomPictures.forEach((picture) => {
        productsSection.append(createTemplate(picture));
    })
})

linkBabyroom.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.innerHTML = '';
    babyroomPictures.forEach((picture) => {
        productsSection.append(createTemplate(picture));
    })
})

linkAll.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.innerHTML = '';
    allPictures.forEach((picture) => {
        productsSection.append(createTemplate(picture));
    })
})



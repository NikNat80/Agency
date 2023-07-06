const template = document.querySelector('#employee');
const peoplesSection = document.querySelector('.team__peoples');

const names = [{
    name: 'titova ekaterina',
    image: './img/Екатерина.jpg',
}, {
    name: 'andreev kirill',
    image: './img/Кирилл.jpg',
}, {
    name: 'maximova anna',
    image: './img/Анна.jpg',
}, {
    name: 'trubin maxim',
    image: './img/Максим.jpg',
}];
     
function openPopup(employee, newImage) {
    const text = document.querySelector('.team__heading');
    const image = document.querySelector('.person-big');
    image.src = newImage;
    text.textContent = employee;
}

function createTemplate(name, image) {
    const element = template.content.cloneNode(true);
    const imageElement = element.querySelector('.team__photo');
    imageElement.src = image;
    const nameElement = element.querySelector('.team__person-name');
    nameElement.textContent = name;
    imageElement.addEventListener('click', () => {
        openPopup(name, image);
    })
    return element;
}

names.forEach(person => peoplesSection.append(createTemplate(person.name, person.image)));

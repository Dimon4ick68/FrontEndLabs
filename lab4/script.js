

const element7 = document.getElementById('city-description');


const element8 = document.querySelector('a#city-link'); 


element7.onclick = function() {
    this.classList.toggle('active-style-1');
};


element8.onclick = function(event) {

    event.preventDefault(); 
    
    this.classList.toggle('active-style-2');
};



const imgElement = document.getElementById('city-image');
const imgWrapper = document.getElementById('city-link');


let currentWidth = 500;

// 1. Додати зображення
function addImage() {
    // Перевіряємо, чи існує зображення. Якщо ні - створюємо.
    if (!document.getElementById('city-image')) {
        const newImg = document.createElement('img');
        newImg.id = 'city-image';
        newImg.src = '../lab1/krop.jpg'; // Перевірте шлях!
        newImg.alt = 'Фото міста Кропивницький';
        newImg.style.width = '500px';
        newImg.style.height = 'auto';
        
        // Скидаємо розмір
        currentWidth = 500;
        
        imgWrapper.appendChild(newImg);
    }
}

// 2. Збільшити зображення
function increaseImage() {
    const img = document.getElementById('city-image');
    if (img) {
        currentWidth += 50; // Збільшуємо на 50px
        img.style.width = currentWidth + 'px';
    }
}

// 3. Зменшити зображення
function decreaseImage() {
    const img = document.getElementById('city-image');
    if (img) {
        if (currentWidth > 50) { // Обмеження, щоб не зникло зовсім
            currentWidth -= 50; // Зменшуємо на 50px
            img.style.width = currentWidth + 'px';
        }
    }
}

// 4. Видалити зображення
function deleteImage() {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
}
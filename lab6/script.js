const loadBtn = document.getElementById('loadBtn');
const usersContainer = document.getElementById('users-container');

// Функція для отримання даних
function fetchUsers() {
    // Запитуємо 5 користувачів (results=5)
    fetch('https://randomuser.me/api/?results=5')
        .then((response) => {
            // Перевіряємо статус відповіді
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Парсимо JSON
        })
        .then((data) => {
            const users = data.results;
            renderUsers(users); // Викликаємо функцію відображення
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
            usersContainer.innerHTML = `<p style="color:red">Помилка завантаження даних!</p>`;
        });
}

// Функція для відображення карток на сторінці
function renderUsers(users) {
    // Не очищуємо контейнер, щоб додавати нових при кожному кліку (можна змінити на usersContainer.innerHTML = '' якщо треба замінювати)
    // usersContainer.innerHTML = ''; 

    users.forEach(user => {
        // Створюємо картку
        const card = document.createElement('div');
        card.className = 'user-card';


        
        const pictureUrl = user.picture.large;
        const fullName = `${user.name.first} ${user.name.last}`;
        const city = user.location.city;
        const country = user.location.country;
        const postcode = user.location.postcode;

        // Формуємо HTML картки
        card.innerHTML = `
            <img src="${pictureUrl}" alt="User Photo">
            <div class="user-info">
                <p><b>Name:</b> ${fullName}</p>
                <p><b>City:</b> ${city}</p>
                <p><b>Country:</b> ${country}</p>
                <p><b>Postcode:</b> ${postcode}</p>
            </div>
        `;

        // Додаємо картку в контейнер
        usersContainer.appendChild(card);
    });
}

// Додаємо обробник події на кнопку
loadBtn.addEventListener('click', fetchUsers);
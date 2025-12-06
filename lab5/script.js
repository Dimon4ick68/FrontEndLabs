
const form = document.getElementById('userForm');
const resultDiv = document.getElementById('result');

// Регулярні вирази (Відповідно до варіанта 6)
const patterns = {
    fullname: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/, // Шереметьєв Д.С.
    birthdate: /^\d{2}\.\d{2}\.\d{4}$/,                        // 06.08.2005
    address: /^м\.\s[А-ЯІЇЄҐа-яіїєґ\s]+$/,                     // м. Кропивницький
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,          // ...@....com
    telegram: /^@[a-zA-Z0-9_]+$/                               // @dimon
};

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Зупиняємо відправку форми
    
    let isValid = true;
    let outputData = "<h3>Введені дані:</h3><ul>";

    // Перевіряємо кожне поле
    for (let fieldId in patterns) {
        const input = document.getElementById(fieldId);
        const value = input.value;
        const pattern = patterns[fieldId];

        // Скидаємо стиль помилки
        input.classList.remove('error');

        if (pattern.test(value)) {
            // Якщо вірно
            outputData += `<li><b>${fieldId}:</b> ${value}</li>`;
        } else {
            // Якщо помилка
            isValid = false;
            input.classList.add('error');
        }
    }
    outputData += "</ul>";

    // Вивід результату
    if (isValid) {
        resultDiv.innerHTML = outputData;

        const newWindow = window.open("", "Результат", "width=400,height=400");
        newWindow.document.write(outputData);
    } else {
        resultDiv.innerHTML = "<p style='color:red;'>Будь ласка, виправте помилки у виділених полях.</p>";
    }
});


const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');
const VARIANT_NUMBER = 6; // Клітинка, з якою працюємо

// 1. Створення таблиці
let counter = 1;
for (let i = 0; i < 6; i++) { // 6 рядків
    const row = document.createElement('tr');
    
    for (let j = 0; j < 6; j++) { // 6 стовпців
        const cell = document.createElement('td');
        cell.innerText = counter;
        
        // Якщо це наша клітинка (№6)
        if (counter === VARIANT_NUMBER) {
            
            // a) Mouseover: Випадковий колір
            cell.addEventListener('mouseover', function() {
                this.style.backgroundColor = getRandomColor();
            });

            // b) Click: Колір з палітри
            cell.addEventListener('click', function() {
                this.style.backgroundColor = colorPicker.value;
            });


            cell.addEventListener('dblclick', function() {
                // Визначаємо координати поточної клітинки
                const startRow = this.parentElement.rowIndex; 
                const startCol = this.cellIndex;              

                // Проходимо від стартового рядка до кінця таблиці
                for (let r = startRow; r < table.rows.length; r++) {
                    // Проходимо від стартового стовпця до кінця рядка
                    for (let c = startCol; c < table.rows[r].cells.length; c++) {
                        table.rows[r].cells[c].style.backgroundColor = colorPicker.value;
                    }
                }

            });
        }

        row.appendChild(cell);
        counter++;
    }
    table.appendChild(row);
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
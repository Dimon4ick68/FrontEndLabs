import React, { useState } from 'react';
import cityImage from '../krop.jpg'; // Переконайтеся, що фото є в папці src або public

function Image() {
  // Стейт для наявності зображення та його розміру
  const [imgVisible, setImgVisible] = useState(true);
  const [imgWidth, setImgWidth] = useState(500);

  const addImage = () => {
    setImgVisible(true);
    setImgWidth(500); // Скидаємо розмір при додаванні
  };

  const increaseImage = () => {
    setImgWidth(prev => prev + 50);
  };

  const decreaseImage = () => {
    if (imgWidth > 50) {
        setImgWidth(prev => prev - 50);
    }
  };

  const deleteImage = () => {
    setImgVisible(false);
  };

  return (
    <div className="image-section">
      <div className="image-wrapper">
        {imgVisible && (
          <a href="https://kr-rada.gov.ua/" target="_blank" rel="noreferrer">
            <img 
                src={cityImage} 
                alt="Кропивницький" 
                style={{ width: `${imgWidth}px`, height: 'auto' }} 
            />
          </a>
        )}
      </div>
      
      <div className="controls" style={{ marginTop: '10px' }}>
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImage}>Збільшити</button>
        <button onClick={decreaseImage}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
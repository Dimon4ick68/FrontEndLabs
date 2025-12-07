import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

function App() {
  // Масив товарів для Галереї
  const goods = [
    { id: 1, name: 'Apple', price: 20, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
    { id: 2, name: 'Banana', price: 35, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
    { id: 3, name: 'Orange', price: 40, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' },
    { id: 4, name: 'Grapes', price: 60, image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg' },
    { id: 5, name: 'Peach', price: 55, image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg' },
    { id: 6, name: 'Pear', price: 45, image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Pears.jpg' },
  ];

  return (
    <div className="App">
      {/* Завдання 1 */}
      <Header />
      <Content />
      <Image />

      <hr />

      {/* Завдання 2 */}
      <h2>Галерея товарів</h2>
      <div className="goods-gallery">
        {goods.map(item => (
          <GoodsCard 
            key={item.id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
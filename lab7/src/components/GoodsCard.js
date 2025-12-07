import React from 'react';

function GoodsCard({ image, name, price }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const imgStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />
      <h3>{name}</h3>
      <p>Ціна: <b>{price} грн</b></p>
    </div>
  );
}

export default GoodsCard;
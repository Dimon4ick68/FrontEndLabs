import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    // Стан для відстеження кліків (чи активний змінений колір)
    this.state = {
      isElement1Active: false, 
      isElement2Active: false  
    };
  }

  // Метод для зміни кольору 7-го елемента
  handleElement1Click = () => {
    this.setState(prevState => ({
      isElement1Active: !prevState.isElement1Active
    }));
  };

  // Метод для зміни кольору 8-го елемента
  handleElement2Click = () => {
    this.setState(prevState => ({
      isElement2Active: !prevState.isElement2Active
    }));
  };

  render() {
    const { isElement1Active, isElement2Active } = this.state;

    // Стилі для активного стану (Вар. 6)
    const style1 = {
      backgroundColor: isElement1Active ? '#068f8f' : 'transparent',
      color: isElement1Active ? 'white' : 'black',
      cursor: 'pointer',
      padding: '5px'
    };

    const style2 = {
        backgroundColor: isElement2Active ? '#f5f506' : 'transparent',
        color: isElement2Active ? 'black' : 'black',
        cursor: 'pointer',
        padding: '5px'
    };

    return (
      <main>
        <h3>Мої Хобі</h3>
        <ul>
          <li>Комп'ютерні ігри</li>
          <li>Слухати музику</li>
          <li>Грати в більярд</li>
          <li>Займатися спортом</li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol onClick={this.handleElement2Click} style={style2}>
          <li>Сім (Se7en)</li>
          <li>П'ять ночей з Фреді (Five Nights at Freddy's)</li>
          <li>Залізна людина (Iron Man)</li>
          <li>Бетмен (Batman)</li>
        </ol>

        <h3>Улюблене місто: Кропивницький</h3>
        {/* 7-й елемент - Опис міста */}
        <p 
          id="city-description" 
          onClick={this.handleElement1Click} 
          style={style1}
        >
          Кропивницький (до 2016 року — Кіровоград) — місто в центральній частині
          України, адміністративний центр Кіровоградської області. Це місто відоме
          своїм історичним та культурним спадком.
        </p>
      </main>
    );
  }
}

export default Content;
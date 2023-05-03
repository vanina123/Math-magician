import React from 'react';
import './calculator.css';
import Data from './script';

function Cal() {
  return (
    <div className="Cal">
      <div className="calculate">
        <Data />
        <section className="cal-btn">
          <button type="button">AC</button>
          <button type="button" className="operator">+/-</button>
          <button type="button" className="digit">%</button>
          <button type="button" className="display">&#247;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="display">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="display">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="display">+</button>
          <button type="button" className="hero">0</button>
          <button type="button">.</button>
          <button type="button" className="display">= </button>
        </section>
      </div>
    </div>
  );
}

export default Cal;

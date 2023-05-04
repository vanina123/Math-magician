import React, { useState } from 'react';
import './calculator.css';
import calculate from '../Logic/calculate';

function Cal() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const creatEvents = (e) => {
    const btnName = e.target.innerHTML;
    const result = calculate(state, btnName);
    setState(result);
  };
  const { total, operation, next } = state;
  return (
    <div className="Cal">
      <div className="calculate">
        <div className="span-btn">
          <div className="even">
            <h1>
              {total}
              {operation}
              {next}
            </h1>
          </div>
        </div>
        <section className="cal-btn">
          <button type="button" onClick={creatEvents}>AC</button>
          <button type="button" className="operator" onClick={creatEvents}>
            +/-
          </button>
          <button type="button" className="digit" onClick={creatEvents}>
            %
          </button>
          <button type="button" className="display" onClick={creatEvents}>
            +
          </button>
          <button type="button" onClick={creatEvents}>
            7
          </button>
          <button type="button" onClick={creatEvents}>
            8
          </button>
          <button type="button" onClick={creatEvents}>
            9
          </button>
          <button type="button" className="display" onClick={creatEvents}>
            -
          </button>
          <button type="button" onClick={creatEvents}>
            4
          </button>
          <button type="button" onClick={creatEvents}>
            5
          </button>
          <button type="button" onClick={creatEvents}>
            6
          </button>
          <button type="button" className="display" onClick={creatEvents}>
            x
          </button>
          <button type="button" onClick={creatEvents}>
            1
          </button>
          <button type="button" onClick={creatEvents}>
            2
          </button>
          <button type="button" onClick={creatEvents}>
            3
          </button>
          <button type="button" className="display" onClick={creatEvents}>
            ÷
          </button>
          <button type="button" className="hero" onClick={creatEvents}>
            0
          </button>
          <button type="button" onClick={creatEvents}>
            .
          </button>
          <button type="button" className="display" onClick={creatEvents}>
            =
          </button>
        </section>
      </div>
    </div>
  );
}

export default Cal;

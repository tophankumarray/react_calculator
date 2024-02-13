import React, { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [val, Setval] = useState("");

  let handlecount = (e) => {
    Setval(val + e.target.innerHTML);
  };

  let handleequal = () => {
    Setval(eval(val));
  };

  let handlechange = () => {
    Setval("");
  };

  let handledelete = (e) => {
    Setval(val.toString().slice(0, -1));
  };

  return (
    <div className="calculator">
      <input type="text" placeholder="0" value={val} />
      <div>
        <button className="operator" onClick={handlechange}>
          AC
        </button>
        <button className="operator" onClick={handledelete}>
          DEL
        </button>
        <button className="operator" onClick={handlecount}>
          %
        </button>
        <button className="operator" onClick={handlecount}>
          /
        </button>
      </div>
      <div>
        <button onClick={handlecount}>7</button>
        <button onClick={handlecount}>9</button>
        <button onClick={handlecount}>8</button>
        <button className="operator" onClick={handlecount}>
          *
        </button>
      </div>
      <div>
        <button onClick={handlecount}>5</button>
        <button onClick={handlecount}>4</button>
        <button onClick={handlecount}>6</button>
        <button className="operator" onClick={handlecount}>
          -
        </button>
      </div>
      <div>
        <button onClick={handlecount}>1</button>
        <button onClick={handlecount}>2</button>
        <button onClick={handlecount}>3</button>
        <button className="operator" onClick={handlecount}>
          +
        </button>
      </div>
      <div>
        <button onClick={handlecount}>00</button>
        <button onClick={handlecount}>0</button>
        <button onClick={handlecount}>.</button>
        <button className="equalBtn" onClick={handleequal}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;

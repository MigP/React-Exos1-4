import "./Calculatrice.css";
import { useState } from "react";

const Calculatrice = () => {
  // State
  const [nb1, setNb1] = useState("");
  const [operator, setOperator] = useState("");
  const [nb2, setNb2] = useState("");
  const [result, setResult] = useState("");

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();

    switch (operator) {
      case "+":
        setResult(parseInt(nb1) + parseInt(nb2));
        break;
      case "-":
        setResult(nb1 - nb2);
        break;
      case "*":
        setResult(nb1 * nb2);
        break;
      case "/":
        setResult(nb1 / nb2);
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nb1 : </label>
        <input
          type="number"
          value={nb1}
          onChange={(e) => setNb1(e.target.value)}
        />

        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <label>Nb2 : </label>
        <input
          type="number"
          value={nb2}
          onChange={(e) => setNb2(e.target.value)}
        />

        <input type="submit" value="=" />

        <input type="text" value={result} readOnly />
      </form>
      <hr />
    </div>
  );
};

export default Calculatrice;

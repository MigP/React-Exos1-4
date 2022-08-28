import logo from "./logo.svg";
import "./App.css";
import Bonjour from "./components/Bonjour/Bonjour";
import Calculatrice from "./components/Calculatrice/Calculatrice";
import ListeProduits from "./components/ListeProduits/ListeProduits";
import Compteur from "./components/Compteur/Compteur";

function App() {
  const products = [
    { id: 1, name: "Pomme", price: 10, promo: false },
    { id: 2, name: "Cerise", price: 2, promo: true },
    { id: 3, name: "Poire", price: 15, promo: false },
  ];

  return (
    <div className="App">
      <div>
        <h1>Exo. 1 - Bonjour</h1>
        <Bonjour nom="Miguel"></Bonjour>
      </div>
      <div>
        <h1>Exo. 2 - Liste de produits</h1>
        <ListeProduits products={products}></ListeProduits>
      </div>
      <div>
        <h1>Exo. 3 - Compteur</h1>
        <Compteur incrementation={10}></Compteur>
      </div>
      <div>
        <h1>Exo. 4 - Calculatrice</h1>
        <Calculatrice></Calculatrice>
      </div>
    </div>
  );
}

export default App;

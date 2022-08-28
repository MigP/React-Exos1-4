import "./Bonjour.css";

const Bonjour = (props) => {
  const { nom, age } = props;

  return (
    <div>
      <p className="nom">Bienvenue {nom} sur l'application React !</p>
      <p className="age">Vous avez {age} ans !</p>
      <hr />
    </div>
  );
};

Bonjour.defaultProps = {
  age: 18,
};

export default Bonjour;

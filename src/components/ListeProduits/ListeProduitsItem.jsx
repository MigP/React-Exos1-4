import './ListeProduits.css'

const ListeProduitsItem = (props) => {

    // Props
    const {name, price, promo} = props

    return (
        <div>
            <h4>{name}</h4>
            <p className={promo && "red"}>{price}</p>
        </div>
    )
}

export default ListeProduitsItem
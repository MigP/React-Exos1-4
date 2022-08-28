import ListeProduitsItem from "./ListeProduitsItem"

const ListeProduits = (props) => {

    // Props
    const {products} = props

    const productsJSX = products.map(
        p => <ListeProduitsItem key={p.id} name={p.name} price={p.price} promo={p.promo}></ListeProduitsItem>
    )

    return (
        <div>
            {productsJSX}
            <hr/>
        </div>
    )
}

export default ListeProduits
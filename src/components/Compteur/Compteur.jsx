import { useState } from "react"

const Compteur = (props) => {

    // Props
    const { incrementation } = props

    // State
    const [value, setValue] = useState(0)

    // Fonction

    const handleAdd = () => {
        setValue(p => p + incrementation)
    }

    const handleReset = () => {
        setValue(0)
    }

    return (
        <div>
            <h3>Compteur</h3>
            <p>{value}</p>
            <button onClick={handleAdd}>+ {incrementation}</button>
            <button onClick={handleReset}>Reset</button>
            <hr />
        </div>
    )
}

Compteur.defaultProps = {
    incrementation: 1
}

export default Compteur
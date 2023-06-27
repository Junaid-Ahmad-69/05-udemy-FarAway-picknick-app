import React, {useState} from 'react'
import './InputForm.css'

const InputForm = ({onAddItem}) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (!description) return
        const updateList = {description, quantity, packed: false, id: Math.random() * 0.5}
        onAddItem(updateList)
        setDescription("");
        setQuantity("");
    }


    return (
        <form className="add-form" onSubmit={handlerSubmit}>
            <h3>What do you need for your 🤩 trip?</h3>
            <select value={quantity} onChange={(e) => {
                setQuantity(Number(e.target.value))
            }}>
                {Array.from({length: 20}, (_, i) => i + 1).map(num => (
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>
            <input type="text" placeholder="Items..." value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default InputForm

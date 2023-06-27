import React, {useState} from 'react'
import Logo from "./Components/Logo/Logo";
import InputForm from "./Components/InputForm/InputForm";
import PackingList from "./Components/PackingList/PackingList";
import Status from "./Components/Status/Status";
import './App.css'

const App = () => {
    const [item, setItem] = useState([]);

    function handlerAddItem(item) {
        setItem(items => [...items, item])
    }

    function handlerDeleteItem(id) {
        setItem((items) => items.filter(item => item.id !== id))
    }

    function handlerToggle(id) {
        setItem((items) => items.map((item) => item.id === id ? {
            ...item, packed: !item.packed
        } : item));
    }

    function handlerClearList(){
        const confirm = window.confirm('Are you sure you want to delete all item?')
        if(confirm) setItem([])
    }

    return (
        <div className="app">
            <Logo/>
            <InputForm onAddItem={handlerAddItem}/>
            <PackingList onToggleItem={handlerToggle} onDeleteItem={handlerDeleteItem} item={item} onClearList={handlerClearList}/>
            <Status item={item}/>
        </div>
    )
}

export default App


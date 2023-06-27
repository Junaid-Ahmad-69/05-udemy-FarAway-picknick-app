import React, {useState} from 'react'
import './PackingList.css'
import Item from "./Item/Item";

const PackingList = ({item, onDeleteItem, onToggleItem, onClearList}) => {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if (sortBy === "input") sortedItems = item;
    if (sortBy === "description") sortedItems = item.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortBy === "packed") sortedItems = item.slice().sort((a, b) => (+(a.packed) - +(b.packed)))
    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => {
                    return (
                        <Item item={item} key={item.id} onToggleItem={onToggleItem}
                              onDeleteItem={() => onDeleteItem(item.id)}/>
                    )
                })}
            </ul>
            <div className="actions">
                {item.length > 0 &&
                    <div>
                        <select value={sortBy} onChange={(e) => {
                            setSortBy(e.target.value)
                        }}>
                            <option value="input">Sort by input order</option>
                            <option value="description">Sort by description</option>
                            <option value="packed">Sort by packed status</option>
                        </select>
                        <button onClick={onClearList}>Clear Item</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PackingList

import './Status.css'

const Status = ({item}) => {
    if (!item.length) return <p className="stats"><em>Start adding some items to your packing list 🚀</em></p>
    const numItems = item.length;
    const numPacked = item.filter(packed => packed.packed).length;
    const packPercent = Math.round(numPacked / numItems * 100)
    return (
        <footer className="stats">
            <em>
                {packPercent === 100 ? "You got everything! Ready to go ✈" :
                    ` 👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${packPercent}%)
            `
                }
            </em>

        </footer>
    )
}

export default Status

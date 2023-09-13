const Cell = ({id, cell, setCells, go, setGo, cells, winningMessage}) => {

    const handleClick = (event) => {
        if (event.target.className === 'circle') return
        if (event.target.className === 'cross') return
        const taken = event.target.firstChild.classList.contains("circle") || 
        event.target.firstChild.classList.contains("cross")

        if (!taken){
            if (go === "circle"){
                event.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo("cross")
            }
            if (go === "cross"){
                event.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells)
    }

    return ( 
        <div className="square" id={id} onClick={!winningMessage ? handleClick: undefined}>
            <div className={cell}></div>
        </div>
     );
}
 
export default Cell;
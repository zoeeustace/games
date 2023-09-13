const Cell = ({id, cell, setCells, go}) => {

    const handleClick = (event) => {
        const taken = event.target.firstChild.classList.contains("circle") || 
        event.target.firstChild.classList.contains("cross")

        if (!taken){
            if (go === "circle"){
                event.target.firstChild.classList.add("circle")
            }
            if (go === "cross"){
                event.target.firstChild.classList.add("cross")
            }
        }
    }

    return ( 
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
     );
}
 
export default Cell;
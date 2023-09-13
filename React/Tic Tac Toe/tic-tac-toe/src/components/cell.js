const Cell = ({id, cell, setCells, go, setGo}) => {

    const handleClick = (event) => {
        const taken = event.target.firstChild.classList.contains("circle") || 
        event.target.firstChild.classList.contains("cross")

        if (!taken){
            if (go === "circle"){
                event.target.firstChild.classList.add("circle")
                setGo("cross")
            }
            if (go === "cross"){
                event.target.firstChild.classList.add("cross")
                setGo("circle")
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
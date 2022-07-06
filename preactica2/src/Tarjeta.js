import React,{useState} from "react";
import "./Tarjeta.css"

export default function Tarjeta() {

    let listanombres=["Julian","Pedro","Juan","Sabrina","Bojack Horseman","Dayan"]
    const [edades,setedades]=useState([15])

    function EdadRandom() {
        let edadesRan = Math.round(Math.random()*30)
        setedades([...edades,edadesRan])
    }

    return (
        <div>

            <div className="padre">

            <div className="hijo1">
                {listanombres.map((elemento) => <h3>{elemento}</h3>)}
            </div>

            <div className="hijo2">
                {edades.map((elemento) => <h3 className="edades">{elemento}</h3>)}
            </div>

            </div>

            <button onClick={EdadRandom}> Agregar Edad</button>

        </div>
    )
}

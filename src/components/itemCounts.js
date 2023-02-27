import { useState } from "react";

import "./_itemCounts.scss"



export const ItemCounts = () => {
    
    let [counter, setCounter] = useState(0)

    const handleClickMas = () => {

        setCounter( counter + 1 )
    }

    const handleClickMenos = () => {

        if(counter === 0){
            
            setCounter( counter = 0 )

        } else{

            setCounter( counter - 1 )

        }
    }



    return (
        <div className="contenedor-general">
            <div className="contenedor-sumador">
                <div className="contenedor-masmenos">
                    <div onClick={handleClickMenos} className="caja menos">-</div>
                    <div className="caja">{counter}</div>
                    <div onClick={handleClickMas} className="caja mas">+</div>
                </div>
            </div>
        </div>
    )
}
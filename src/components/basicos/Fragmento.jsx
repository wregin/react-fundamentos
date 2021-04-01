import React from 'react'

export default function Fragmento(props) {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>cuidado com esse fragmento</p>
        </React.Fragment>
        
        /* 
            Para o caso onde pode não querer enviar em DIV e/ou envolver em DIV
            pode ser com o REACT.FRAGMENT ou apenas <> </>
            cuidado pois <> não aceita atributo/propriedades
            para devolver os elementos ele precisa estar envolvidos
        */
    )
}
import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {

    // Via props é a conexão Direta, do pai para o filho por exemplo
    // a indireta seria do filho para o pai

    return (
        <div>
            <DiretaFilho nome="Gabriel" idade={20} nerd={true} ></DiretaFilho>
            <DiretaFilho nome="Gustavo" idade={15} nerd={false} ></DiretaFilho>
        </div>
    )
}
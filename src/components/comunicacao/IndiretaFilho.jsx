import React from 'react'

export default props => {
    const cb = props.clicar // cb de Call Back
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            {/* _ para dizer que não será trabalhado o evento, apenas a func */}
            <button onClick={_ => cb('João', gerarIdade(), gerarNerd())}>
                Fornecer dados
            </button>
        </div>
    )
}
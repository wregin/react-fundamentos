import "./Contador.css"
import React from 'react'

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"

class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
        clicks: 0,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
            clicks: this.state.clicks + 1,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
            clicks: this.state.clicks + 1,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador" >
                <h3>Contador</h3>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
                <h4>Cliques: {this.state.clicks}</h4>
            </div>
        )
    }

}

export default Contador
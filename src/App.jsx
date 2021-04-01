import './App.css'
import React from 'react'

import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13 - Mega" color="#00ff00" >
                <Mega qtde={6} />
            </Card>

            <Card titulo="#12 - Contador" color="#666699" >
                <Contador numeroInicial={10} ></Contador>
            </Card>

            <Card titulo="#11 - Componente controlado (input)" color="#993399" >
                <Input></Input>
            </Card>

            <Card titulo="#10 - Conexão indireta" color="#ff3300" >
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Conexão direta" color="#3399ff" >
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização condicional" color="#F48005" >
                <ParOuImpar numero={20}></ParOuImpar>
                {/* Exemplo de renderização condicional */}
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Desafio repetição" color="#370888" >
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#D1FF33" >
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#965FS" >
                <Familia sobrenome="Cone">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Irminha" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60} />
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#FFAD33">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parâmetro" color="#334F">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro" nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#FF33B1">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);
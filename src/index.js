import ReactDom from 'react-dom';
import React from 'react';
import './index.css';
import './App.css';
import './ListaProdutos.css';

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador';
import Input from './components/Formulário/Input';
import IndiretaPai from './components/comunicação/IndiretaPai';
import DiretaPai from './components/comunicação/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfor';
import ParOuImpar from './components/condicional/ParOuImpar';
import ListaAlunos from './components/repetição/ListaAlunos';
import ListaProdutos from './components/repetição/ListaProdutos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Card from './components/layout/Card';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

ReactDom.render(
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

    <Card titulo="#11 -Contador [desafio] " color="#E94C6F">
        <Mega ArrayLength={7}></Mega>
      </Card>

    <Card titulo="#11 -Contador Classe " color="#E94C6F">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#10 - Componenet Controlado (Input) " color="#E8B71A">
        <Input></Input>
      </Card>

      <Card titulo="#09 - Comunicação Indireta" color="#1FDA9A">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#08 - Comunicação Direta" color="#5E412F">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#07 - Renderização Condicional" color="#FFC33C">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Igor' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ nome: '' }}></UsuarioInfo>
        <UsuarioInfo></UsuarioInfo>
      </Card>

      <Card titulo="#06 - Repetição [desafio]" color="#588C73">
        <ListaProdutos></ListaProdutos>
      </Card>

      <Card titulo="#05 - Repetição" color="#BFF073">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#04 - Componente com Filhos" color="#24A8AC">
        <Familia sobrenome="Luther King">
          <FamiliaMembro name="Pedro" />
          <FamiliaMembro name="Sara" />
          <FamiliaMembro name="Igor" />
        </Familia>
      </Card>

      <Card titulo="#03 - Desafio Aleatorio" color="#588C73 ">
        <ComParametro
          titulo="Nota Aleatoria"
          subtitulo="Nota do Judi"
          nota={Aleatorio()}
        />
      </Card>

      <Card titulo="#02 - Fragmento" color="#78C0A8">
        <Fragmento />
      </Card>

      <Card titulo=" #01 - Primeiro Componente" color="#080">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>,
  document.getElementById('root')
);

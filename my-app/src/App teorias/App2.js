import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

/*famosa class component. this serve para mostrar a referencia. 
<div> é o componente pai(literalmente)
é uma boa prática quebrar os componentes
<hr> - divisória*/
class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo}/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h1>nome: {this.props.nome}</h1>
        <h2>profissao: {this.props.cargo}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <><div>
      <h1>Conheça:</h1>
      <Equipe nome="fernada" cargo="programadora"/>
    </div>
    <div>
    </div></>

  );
}

export default App;

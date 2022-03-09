/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './style.css'

// Importando a imagem do cronometro
import cronometro from './assets/cronometro.png'; 

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.GO = this.GO.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  GO(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'PAUSAR';
    }

    this.setState(state);
  }

  zerar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);

  }

  render(){
    return(
      <div className="container">
        <img src={cronometro} className="img" />
        <a className="timer">{this.state.numero.toFixed(2)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.GO}>{this.state.botao}</a>
          <a className="botao" onClick={this.zerar}>ZERAR</a>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";

class App extends Component{

/*o constructor é chamado antes de ser montado. 
Quando implementado deve sempre chamar a super(props) antes de qualquer outra declaração, 
se não o this.props não vai ser definido no constructor. 
Geralmente utilizado para duas coisas: inicializar um estado local por objeto tipo this.state 
ou para manipular metodos de handler a uma instancia.
OBS: constructor é o unico lugar que pode colocar o this.state diretamente. Todos os outros metodos
deve usar o componentDidMount()*/
    constructor(props){
        super(props);
        this.state = { //aqui coloca todos os states relacionados ao app.js
            nome: 'Fernanda',
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this)
    }
    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        if (state.contador === 0){
            alert('chegou em zero');
            return;
        }
        
        state.contador -= 1;
        state.nome = 'cascata'
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h1>contador</h1>
                {this.state.nome}
                <h3>
                <button onClick={this.diminuir}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>
                </h3>

            </div>
        );
    }
}

export default App;

/* diferenca entre props e states: 
props são estáticas e 
states são estados que conseguimos mudar o estado dentro delas, 
ou seja são mutáveis(variáveis?)*/
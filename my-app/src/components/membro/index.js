import React, { Component } from "react";

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({nome: 'cascata'})
    }
    
    render(){
        return(
            <div>
                <h3>bem vinda {this.state.nome}</h3>
                <button onClick={this.entrar}>entrar como cascata</button>
                <button onClick={ () => this.setState({nome:''})}>sair </button>
            </div>

        );
    }
}

export default Membro;
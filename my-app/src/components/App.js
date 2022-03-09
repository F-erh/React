import React, { Component } from "react";
import Feed from '../components/feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            genero: 'm'
        }
        this.trocaE = this.trocaE.bind(this);
        this.trocagenero = this.trocagenero.bind(this);
    }

    trocaE(e){
        let valorD = e.target.value;
        this.setState({email:valorD})
    }

    trocagenero(e){
        let valorG = e.target.value;
        this.setState({genero:valorG})
    }

    render(){
        return(
            <><div>
                Email:
                <input type="email" name="email" value={this.state.emai1} onChange={this.trocaE} />
                Senha:
                <input type="password" name="senha" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
                genero:
                <select name='genero' value={this.state.genero} onChange={this.trocagenero}>
                    <option value='fem'>Fem</option>
                    <option value='mas'>Mas</option>
                </select>
            </div>
            <div>
                <h4>{this.state.email}</h4>
                <h4>{this.state.senha}</h4>
                <h4>{this.state.genero}</h4>
            </div></>
        );
    }
}

export default App;
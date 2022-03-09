import React, { Component } from 'react';

class App extends Component{
//ciclo de vida. Primeira coisa que é carregada é o constructor
    constructor(props){
        super(props);
        this.state = { 
            hora: '00:00:00'
        };
    }
    //roda o componente apenas uma vez
    componentDidMount(){

        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString()})
        },1000);
    }
    //roda cada vez que a pagina atualiza
    componentDidUpdate(){
        console.log('atualização');
    }
    //questiona se o componente deve ou n atualizar. Passa um true ou false
    shouldComponentUpdate(){
    }

    render(){
        return(
            <div>
                <h1>Projeto {this.state.hora} </h1>
            </div>
        );
    }
}

export default App;

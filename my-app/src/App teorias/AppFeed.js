import React, { Component } from "react";
import Feed from '../components/feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, user:'Fernada', curtidas:10, comentarios:2},
                {id: 2, user:'cascata', curtidas:10, comentarios:2},
                {id: 3, user:'cacau', curtidas:10, comentarios:2},
                {id: 4, user:'lola', curtidas:1, comentarios:0}
            ]

        };
    }
    //map: varre toda a lista de objetos e constroi o componente
    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} user={item.user} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}
 
            </div>
        );
    }
}

export default App;
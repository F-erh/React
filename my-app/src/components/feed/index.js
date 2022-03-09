import React, { Component } from "react";

class Feed extends Component{
    render(){
        return(
            <div key={this.props.key}>
                <h3>{this.props.user}</h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + 'curtidas' : this.props.curtidas + 'curtida'}</a>
                <a>{this.props.comentarios > 1 ? this.props.comentarios + 'comentarios' : this.props.comentarios + ''}</a>                
                <hr/>
            </div>
        );
    }
}

export default Feed;
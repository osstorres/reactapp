import React, {Component} from "react";


export default class P extends Component{
    render() {
        return(
            //asi le pasamos todas las props
            //hacer solo esto cuando no se tienen muchas props o comportamiendo acotado
            <p {...this.props} className="App-intro"/>
        );
    }
}
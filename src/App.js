//export default como al ultimo
//importar por defecto sin {} como React
//Componente es important
import React, { Component } from 'react';
import Cabecera from './components/Cabecera'
import P from './components/P'
import './App.css';


//para crear un componente


class App extends Component {
    state = {
        miau: 'React App'
    }

    manejaClick = texto => {
        console.log(texto)
    }

    cambiarTextoDelEstado = () => {
        this.setState({ miau: 'Hello World'})
    }
  render() {
    const { miau } = this.state
    return (
      <div className="App">
        <Cabecera miau={ miau } manejaClick={ this.manejaClick }/>
        <P onClick={ this.cambiarTextoDelEstado }>
            { miau }
        </P>
        </div>
    );
  }
}
//si quiero importar hola en otro lado tengo que ponerle llaves
export const hola = 'hola'
//sin llaves se importa lo que se exporta por defecto 
export default App;

//export default como al ultimo
//importar por defecto sin {} como React
//Componente es important
import React, { Component } from 'react';
import axios from 'axios'
import FormularioSimple from './components/FormularioSimple'
import './App.css';


//para crear un componente


class App extends Component {
    //se llama una unica vez a menos que se refresque
    constructor() {
        //super llama al constructor de la cual se extiende la cual es component
        super()
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: 'Osiel Torres',
            username: 'Oso',
        }).then(({response})=>console.log(response))

    }
  render() {
    return (
      <div className="App">
        <FormularioSimple/>
        </div>
    );
  }
}
//si quiero importar hola en otro lado tengo que ponerle llaves
export const hola = 'hola'
//sin llaves se importa lo que se exporta por defecto
export default App;

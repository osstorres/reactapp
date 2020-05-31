import React, { Component } from 'react'
import logo from '../logo.svg';
import H1 from './H1'

const styles = {
    header: ({backgroundColor}) => ( {
    backgroundColor,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    })
}


export default class Cabecera extends Component {

    state = {
        backgroundColor : '#282c34',
    }
    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }

    cambiaColorHeader = () => {
        this.setState({backgroundColor: '#f00'})
    }

    render() {
        const { miau } = this.props
        const { backgroundColor } = this.state
        return (
            <header onClick={this.cambiaColorHeader } style={ styles.header({ backgroundColor }) }>
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                <H1>{miau}</H1>
            </header>
        );
    }
}
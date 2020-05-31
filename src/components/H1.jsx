import React, { Component } from "react";

const style = {
    fontSize: '1.5em',
}

export default class H1 extends Component {
    render() {
        return(
            // eslint-disable-next-line jsx-a11y/heading-has-content
            <h1 {...this.props } style={style}/>
        );
    }
}

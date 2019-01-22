import React, { Component } from 'react';

class Checkbox extends React.Component {
    render() {
        return ( 
            <div>
            <input id="checkbox" type="checkbox"/>
            <label for="checkbox">Только открытые</label>
            </div>
        );
    }
}

export default Checkbox;
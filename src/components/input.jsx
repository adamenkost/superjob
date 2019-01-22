import React, { Component } from 'react';

class Input extends React.Component {
    render() {
        return ( 
            <div>
            <input class="input input-search" type="search" placeholder="Поиск по вакансиям"/>
            </div>
        );
    }
}

export default Input;
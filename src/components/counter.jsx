import React, { Component } from 'react';

class Counter extends React.Component {
    render() {
        return ( 
            <div class="item-counter">
            <span><strong>{this.props.count} вакансии</strong></span> 
            <a href="#">Добавить вакансию</a>             
            </div>
        );
    }
}

export default Counter;
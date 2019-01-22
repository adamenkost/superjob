import React, { Component } from 'react';
import CloseProject from './closeProject';

class Vacancy extends React.Component {
    render(_props) {
        return ( 
            <div class="vacancy-block">
            <h4>{this.props.vtitle}</h4> 
            <div class="bottom-vacancy">
            <div class="comment-block">
            <img src={require('../img/search.png')} alt=""/>
            <span>{this.props.comment}</span>  
            </div>
            <CloseProject close="Закрыть вакансию" delete="Удалить"/>
            </div>
            </div>
        );
    }
}

export default Vacancy;
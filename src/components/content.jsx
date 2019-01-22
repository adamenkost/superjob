import React, { Component } from 'react';
import Project from './project';



class Content extends React.Component {
    render() {
        return ( 
            <div>
                <Project 
                title="Название первого проекта" 
                count="34" 
                add="Добавить вакансию"/>
                <Project 
                title="Название проекта, который раскрыт" 
                count="2"
                add="Добавить вакансию"/>
                <Project 
                title="Название второго проекта" 
                count="55" 
                add="Добавить вакансию"/>
                <Project 
                title="Очень-очень длинное название третьего проекта, которое переносится на две строки" 
                count="55"
                add="Добавить вакансию"/>
                
            </div>
        );
    }
}

export default Content;
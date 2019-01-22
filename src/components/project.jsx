import React, { Component } from 'react';
import Counter from './counter';
import CloseProject from './closeProject';
import Vacancy from './vacancy';
import ToggleDisplay from '../../node_modules/react-toggle-display';
import TitleProject from './titleProject';

class Project extends React.Component {
    constructor() {
        super();
        this.state = { show: false };
      }
     
      handleClick() {
        this.setState({
          show: !this.state.show
        });
      }
    render(_props) {
        return ( <div>
            <div class="project-block">
            <a onClick={ () => this.handleClick() }>
            <h2>{this.props.title}</h2> 
            </a>
            <div class="bottom-project">
            <div class="item-counter">
            <span><strong>{this.props.count} вакансии</strong></span> 
            <a href="#">{this.props.add}</a>             
            </div>
            <CloseProject close="Закрыть проект" delete="Удалить"/>
            </div>
            <ToggleDisplay show={this.state.show}>
            <Vacancy vtitle="Первая вакансия" сomment="Вакансия открыта, идет подбор кандидатов"/>
            <Vacancy vtitle="Вторая вакансия" сomment="Вакансия открыта, идет подбор кандидатов"/>
            <Vacancy vtitle="Третья вакансия" comment="Вакансия закрыта, сотрудник нанят"/>
            </ToggleDisplay>
            </div>
            </div>
        );
    }
}

export default Project;
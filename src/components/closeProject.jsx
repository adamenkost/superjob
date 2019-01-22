import React, { Component } from 'react';

class CloseProject extends React.Component {
    render(_props) {
        return ( 
            <div class="item-close">
            <a href="#">{this.props.close}</a>
            <a href="#">{this.props.delete}</a>            
            </div>
        );
    }
}

export default CloseProject;
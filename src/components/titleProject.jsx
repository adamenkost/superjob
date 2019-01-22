import React, { Component } from 'react';

class TitleProject extends React.Component {
    render(_props) {
        return ( 
            <div>
            <h2>{this.props.title}</h2>           
            </div>
        );
    }
}

export default TitleProject;
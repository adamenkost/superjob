import React, { Component } from 'react';

class Comment extends React.Component {
    render(_props) {
        return ( 
            <div class="comment-block">
            <img src={require('../img/search.png')} alt=""/>
            <span>{this.props.comment}</span>  
            </div>
        );
    }
}

export default Comment;
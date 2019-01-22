import React, { Component } from 'react';
import Input from './input';
import Checkbox from './checkbox';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width: '600px',
      padding: '24px'
    }
  };

class Header extends React.Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    render() {
        return ( 
            <div>
            <header>
              <h1>Список проектов</h1>
              <div class="header-form">
              <div class="search-block">
              <Input/>
              <Checkbox/>
              </div>
              <button onClick={this.openModal} class="btn btn-green">Добавить проект</button>
              </div>
              </header>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <div class="modal-content">
                    <div class="modal-header">
                            <h2 ref={subtitle => this.subtitle = subtitle}>Новый проект</h2>
                            <button class="btn-close" onClick={this.closeModal}><img src={require('../img/close.png')} alt=""/></button>
                    </div>
                    <form>
                        <input type="text" placeholder="Название проекта"/>
                        <button class="btn btn-green add">Создать</button>
                    </form>
                    </div>
                </Modal>
              </div>
        );
    }
}

export default Header;
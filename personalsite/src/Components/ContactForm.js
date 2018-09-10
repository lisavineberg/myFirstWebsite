import React, { Component } from 'react';

class ContactForm extends Component {

    constructor(){
        super()
        this.state = {
            inputName: '',
            // name: '',
            inputMsg: '',
            // msg: ''
            showForm: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMsgChange = this.handleMsgChange.bind(this)
    }

    handleNameChange(e) {
        this.setState({ inputName : e.target.value })
    }

    handleMsgChange(e) {
        this.setState({ inputMsg : e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        // this.setState({ name: this.state.inputName, msg: this.state.inputMsg })
        this.setState({ showForm: false })
        window.open('mailto:lisavineberg@gmail.com?subject='+'An email from '+ this.state.inputName + '&body=' + this.state.inputMsg, '_self')
    }

    render(){
        return (
            <div>
{ (this.state.showForm) ?
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.inputName} placeholder='Your name' onChange={this.handleNameChange} />
               <br />
                <input type='text' className='message-input' value={this.state.inputMsg} placeholder='Your message' onChange={this.handleMsgChange} />
                <br />
                <input type='submit' value='Submit' />
            </form> :
            <div>Thank you, {this.state.inputName}, for submitting your message, I will be in touch with you shortly!</div>
            }
            </div>
        )
    }
}

export default ContactForm
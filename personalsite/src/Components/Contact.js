import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContactForm from './ContactForm.js'



class Contact extends Component {


    render() {
        return (
            <div>
                <ContactForm />
          
            </div>
        )
    }
}

export default Contact
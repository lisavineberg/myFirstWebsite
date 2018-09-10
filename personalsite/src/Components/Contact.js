import React, { Component } from 'react';
import ContactForm from './ContactForm.js'
import me from '../images/me.jpg'



class Contact extends Component {


    render() {
        return (
            <div className='contact-page'>
            <div className='me-img'><img src={me} /></div>
            <div className='contact-text'>Send me a message here, or reach out to me at lisavineberg@gmail.com . Would love to hear from you!</div>
            <div className='contact-form-div'>
                <ContactForm />
          
            </div>
            </div>
        )
    }
}

export default Contact
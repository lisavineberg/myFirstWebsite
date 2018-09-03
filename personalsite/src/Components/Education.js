import React, { Component } from 'react';
import dawson from '../images/dawson.jpg'

class Education extends Component {

    render() {
        return (
            <div className='allSchoolCards'>
              <div className='schoolDiv'>
              <img className='schoolImg' src={dawson} />
              <div>hi</div>
              </div>
              <div className='schoolDiv'>
              There
              </div>
              <div className='schoolDiv'>
              Hello
              </div>
            </div>
        )
    }

}

export default Education
import React, { Component } from 'react';
import dawson from '../images/dawson.jpg'
import mcgill from '../images/mcgill.jpg'
import decode from '../images/decode.jpg'

class Education extends Component {

    render() {
        return (
            <div className='allSchoolCards'>
              <div className='schoolDiv'>
              <img className='schoolImg' src={dawson} />
              <div className='schoolTitle'>Dawson College, 2007-2009</div>
              <div className='schoolText'>First Choice Health Sciences</div>
              </div>
              <div className='schoolDiv'>
              <img className='schoolImg' src={mcgill} />
              <div className='schoolTitle'>McGill University, 2009-2014</div>
              <div className='schoolText'>Bachelor's of Education, specialization in Secondary Math</div>
              </div>
              <div className='schoolDiv'>
              <img className='schoolImg' src={decode}  />
              <div className='schoolTitle'>DecodeMTL, 2018</div>
              <div className='schoolText'>Full-Stack Web Development bootcamp</div>
              </div>
            </div>
        )
    }

}

export default Education
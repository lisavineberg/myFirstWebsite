import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Components/Homepage.js'
import Education from './Components/Education.js'
import Work from './Components/Work.js'
import Volunteer from './Components/Volunteer.js'
import Contact from './Components/Contact.js'
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import './App.css';


class App extends Component {
  // constructor() {
  //   super()
  //   // this.renderHomepage = this.renderHomepage.bind(this)
  //   // this.renderEducation = this.renderEducation.bind(this)
  //   // this.renderVolunteer = this.renderVolunteer.bind(this)
  //   // this.renderWork = this.renderWork.bind(this)
  // }

  renderHomepage() {
    return (<Homepage />)
  }

  renderEducation() {
    return (<Education />)
  }

  renderWork() {
    return (<Work />)
  }

  renderVolunteer() {
    return (<Volunteer />)
  }

  renderContact() {
    return (<Contact />)
  }

  render() {
    return (
      <BrowserRouter>
      <div className='app'>
          <Navbar className='navBar'>
          <div>
                    <NavbarBrand>
                      <NavLink className='navLinks' href='/'>Lisa Vineberg</NavLink>
                      </NavbarBrand>
                      </div>
                      <div className='navItems'>
                    <NavItem className='navItem'>
                        <NavLink className='navLinks' href='/Volunteer'>Volunteer</NavLink>
                    </NavItem>
                    <NavItem className='navItem'>
                        <NavLink className='navLinks' href='/Work'>Work</NavLink>
                    </NavItem>
                    <NavItem className='navItem'>
                        <NavLink className='navLinks' href='/Education'>Education</NavLink>
                    </NavItem>
                    <NavItem className='navItem'>
                        <NavLink className='navLinks' href='/Contact'>Contact</NavLink>
                    </NavItem>
                    </div>
                </Navbar>


        
        <div>
          <Route
            path='/'
            exact={true}
            render={this.renderHomepage}
          />
          <Route
            path='/education'
            exact={true}
            render={this.renderEducation}
          />
          <Route
            path='/work'
            exact={true}
            render={this.renderWork}
          />
          <Route
            path='/volunteer'
            exact={true}
            render={this.renderVolunteer}
          />
               <Route
            path='/contact'
            exact={true}
            render={this.renderContact}
          />
        </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

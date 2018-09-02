import React, { Component } from 'react';
import MyCarousel from './Carousel.js'

class Volunteer extends Component {

    render() {
        return (
            <div>
                <div>Data for Good Montreal: Started the Montreal branch of Data for Good, partnering local statisticians and data analysts with local charities. Organized meet-ups, took minutes, maintained the website. Reached out to new organizations for partnerships. Made presentations in front of groups of 20+. Join a meetup <a href='https://www.meetup.com/DataforGood-Montreal/' target='_blank'>here</a>  </div>
                <div>Lisa's Toys for Charity: Creating my own crochet and knitting patterns and selling the finished product to raise money for local charities. Have raised over $2000 thus far. Some examples displayed below; others viewable <a href='https://www.instagram.com/lisastoysforcharity/' target='_blank'>here</a> </div>
          <MyCarousel />
           
            </div>
        )
    }

}

export default Volunteer
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';



class HomepageBasic extends Component {


    render() {
        return (
            <div className='homepage'>
                <Card className='homepageCard'>
                    <CardTitle>Hi!</CardTitle>
                    <CardText>Please take a look around my website. Further details can be found at my <a href='https://www.linkedin.com/in/lisa-vineberg/' target='_blank'>LinkedIn</a> and please, do not hesitate to reach out :)</CardText>
                </Card>
          
            </div>
        )
    }
}

let Homepage = withRouter(HomepageBasic)
export default Homepage
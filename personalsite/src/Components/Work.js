import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';
import logo1909 from '../images/1909logo.jpg'
import logoBM from '../images/biermarket-logo.jpg'
import logoUS from '../images/UrgencesSantelogo.jpg'
import logoOLC from '../images/OxfordLearningLogo.jpg'
import logoSuite from '../images/suiteLogo.jpg'



class Work extends Component {

    constructor() {
        super()
        this.state = { forwardOne: true, forwardTwo: true, forwardThree: true, forwardFour: true, forwardFive: true }
        this.renderReverseOne = this.renderReverseOne.bind(this)
        this.renderReverseTwo = this.renderReverseTwo.bind(this)
        this.renderReverseThree = this.renderReverseThree.bind(this)
        this.renderReverseFour = this.renderReverseFour.bind(this)
        this.renderReverseFive = this.renderReverseFive.bind(this)
    }

    renderReverseOne() {
        this.setState({ forwardOne: !this.state.forwardOne })
    }

    renderReverseTwo() {
        this.setState({ forwardTwo: !this.state.forwardTwo })
    }

    renderReverseThree() {
        this.setState({ forwardThree: !this.state.forwardThree })
    }

    renderReverseFour() {
        this.setState({ forwardFour: !this.state.forwardFour })
    }

    renderReverseFive() {
        this.setState({ forwardFive: !this.state.forwardFive })
    }

    render() {
        return (
            <div className='allCards'>
                <CardColumns>
                    <Card className='animatedCard'>

                        {
                            (this.state.forwardOne) ?
                                <CardBody>
                                    <CardImg className='workImg' src={logo1909} />
                                    <CardTitle>1909 Taverne Moderne</CardTitle>
                                    <CardText>Supervisor</CardText>
                                    <Button onClick={this.renderReverseOne}>See more</Button>
                                </CardBody> :

                                <CardBody>
                                    <CardText>
                                        Managing groups of 10-30 employees. Assisting in monitoring professional development for the staff. Organizing daily operations. Monitoring and ensuring guest experience by checking on tables and solving any problems as they occur.</CardText>
                                    <Button onClick={this.renderReverseOne}>Return</Button>
                                </CardBody>

                        }
                    </Card>
                    <Card className='animatedCard'>

                        {
                            (this.state.forwardTwo) ?
                                <CardBody>
                                    <CardImg src={logoBM} />
                                    <CardTitle>Bier Markt Montreal</CardTitle>
                                    <CardText>Trainer/Team Captain</CardText>
                                    <Button onClick={this.renderReverseTwo}>See more</Button>
                                </CardBody> :
                                <CardBody>
                                    <CardText>Maintaining an excellent customer experience. Constantly juggling numerous tasks and priorities in a fast-paced, high-stress environment. Encouraging customers to develop their tastes in beers and to explore new styles. Assisting in training new employees. Collaborating in organizing corporate events.</CardText>
                                    <Button onClick={this.renderReverseTwo}>See more</Button>
                                </CardBody>

                        }
                    </Card>
                    <Card className='animatedCard'>

                        {
                            (this.state.forwardThree) ?
                                <CardBody>
                                    <CardImg className='workImg' src={logoUS} />
                                    <CardTitle>Urgences Santé</CardTitle>
                                    <CardText>Medical Dispatcher</CardText>
                                    <Button onClick={this.renderReverseThree}>See more</Button>
                                </CardBody> :

                                <CardBody>
                                    <CardText>

                                        Responding to 911 medical calls and dispatching ambulances across the territory of Montreal and Laval. Keeping a level head in stressful situations. Communicating critical information in a clear and efficient manner.</CardText>
                                    <Button onClick={this.renderReverseThree}>Return</Button>
                                </CardBody>

                        }
                    </Card>
                    <Card className='animatedCard'>

                        {
                            (this.state.forwardFour) ?
                                <CardBody>
                                    <CardImg className='workImg' src={logoOLC} />
                                    <CardTitle>Oxford Learning Center</CardTitle>
                                    <CardText>Math Tutor</CardText>
                                    <Button onClick={this.renderReverseFour}>See more</Button>
                                </CardBody> :

                                <CardBody>
                                    <CardText>

                                        Working with students to overcome their difficulties in high school math and science. Helping the students develop new learning techniques, allowing them to take control of their own education.</CardText>
                                    <Button onClick={this.renderReverseFour}>Return</Button>
                                </CardBody>

                        }
                    </Card>
                    <Card className='animatedCard'>

                        {
                            (this.state.forwardFive) ?
                                <CardBody>
                                    <CardImg className='workImg' src={logoSuite} />
                                    <CardTitle>Suite 88 Chocolatier</CardTitle>
                                    <CardText>Barista/Key Holder</CardText>
                                    <Button onClick={this.renderReverseFive}>See more</Button>
                                </CardBody> :

                                <CardBody>
                                    <CardText>Managing inventory, opening and closing the store. Working and closing the cash and making bank deposits.</CardText>
                                    <Button onClick={this.renderReverseFive}>Return</Button>
                                </CardBody>

                        }
                    </Card>

                </CardColumns>
            </div>
        )
    }

}

export default Work
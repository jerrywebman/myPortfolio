import React from 'react';
import { Jumbotron, CardBody, CardImg, Container, Card, CardTitle, CardText, Col, Row } from 'reactstrap';
import SliderCarousel from './SliderCarousel';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron class="jumbotron JumboImg" fluid>
                    <Row>
                        <Col sm="6">
                            <img src="/img/standout.svg" alt="intro image" />
                        </Col>
                        <Col sm="6" >
                            <h4 className="text">I am Jerry Ifeanyi</h4>
                        </Col>
                    </Row>
                </Jumbotron>


                <h3 className="headers">WHO I AM</h3>
                <hr className="headersLine"></hr>
                <Row>
                    <Col sm="12" md="6" lg="4">
                        <Card body >
                            <CardImg top src="/img/dev.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="contextTitle">Passionate Developer</CardTitle>
                                <hr className="headersLine"></hr>
                                <CardText className="contextBody">A Web developer who crave for perfection. Let's work together, so you can feel the awesomeness of my work. </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Card body>
                            <CardImg top src="/img/collaborate.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="contextTitle">Team Player</CardTitle>
                                <hr className="headersLine"></hr>
                                <CardText className="contextBody">I love working with individuals who strives success. Reachout now let's setup a team of smart developers.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Card body>
                            <CardImg top src="/img/teamplayer.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="contextTitle">Leader</CardTitle>
                                <hr className="headersLine"></hr>
                                <CardText className="contextBody">The passion to teach tech enthusiast and guide them through the process of building great web Apps keeps me going.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


                <h3 className="headers">CLIENT PORTFOLIO</h3>
                <hr className="headersLine"></hr>

                <SliderCarousel className="carousel" />

                <h3 className="headers">WHAT I DO</h3>
                <hr className="headersLine"></hr>
                <Row>
                    <Col sm="12" md="6" lg="4">
                        <Card body>
                            <CardImg top src="/img/solution.svg" alt="Web solution image" />
                            <CardBody>
                                <CardTitle className="contextTitle">Top-class Web Solutions</CardTitle>
                                <hr className="headersLine"></hr>
                                <CardText className="contextBody">Build, design and manage your web applications.</CardText>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Card body>
                            <CardImg top src="/img/training.svg" alt="Training image" />
                            <CardBody>
                                <CardTitle className="contextTitle">Training</CardTitle>
                                <hr className="headersLine"></hr>
                                <CardText className="contextBody">Aspire to be a Tech guru in Web Technologies? Reach out ASAP.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Card body>
                            <CardImg top src="/img/team.svg" alt="Team image cap" />
                            <CardBody>
                                <CardTitle className="contextTitle">Awesome Team Player</CardTitle>
                                <hr className="headersLine"></hr>
                                <CardText className="contextBody">Need me in your team for a full time/contract offer? contact me.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Home
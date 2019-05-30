import React from 'react';
import { Jumbotron, Button, Container, Card, CardTitle, CardText, Col, Row } from 'reactstrap';
import SliderCarousel from './SliderCarousel';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron class="jumboron JumboImg" fluid>
                    <Container fluid>
                        <h2 className="display-3 jumbotronTitle">I AM</h2>
                        <h2 className="display-3 jumbotronTitle"> JERRY IFEANYI. </h2>
                        <h5 className="lead">I Build Responsive Web Applications.</h5>
                        {/* <Button outline color="success">My Portfolio</Button> */}
                    </Container>
                </Jumbotron>


                <h3 className="headers">WHO I AM</h3>
                <hr className="headersLine"></hr>
                <Row>
                    <Col sm="6">
                        <Card body color="">
                            <CardTitle className="contextTitle">Successful Web Developer</CardTitle>
                            <CardText className="contextBody">I am a web developer who crave for perfection and on the process achieved excellence. Let's work together,so you can feel the awesomeness of my work. </CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle className="contextTitle">Planning a Tech Startup?</CardTitle>
                            <CardText className="contextBody">I love collaborating with young minds who wants to be successful. feel free to contact me if you want to setup a team of excellent developers.</CardText>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card body inverse >
                            <CardTitle className="contextTitle">Giving/Sharing Ideas</CardTitle>
                            <CardText className="contextBody">The passion to teach young people and guide them through the process of building top class and great web Apps keeps me going. if you want to learn web technologies, feel free to contact me as i will be ready to support you.</CardText>
                        </Card>
                    </Col>
                </Row>


                <h3 className="headers">CLIENT PORTFOLIO</h3>
                <hr className="headersLine"></hr>

                <SliderCarousel className="carousel" />

                <h3 className="headers">WHAT I DO</h3>
                <hr className="headersLine"></hr>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card body inverse >
                            <CardTitle className="contextTitle">Provide Top-class Web Solutions</CardTitle>
                            <CardText className="contextBody">Build, design and manage your web applications.</CardText>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6">
                        <Card body color="">
                            <CardTitle className="contextTitle">Teach Young Minds</CardTitle>
                            <CardText className="contextBody">Aspire to be a Tech guru in Web Technologies?, want to Own Your Own Learning?, contact me.</CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle className="contextTitle">Awesome Team Player</CardTitle>
                            <CardText className="contextBody">Need me in your team for a part time/contract offer?, please feel free to contact me.</CardText>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Home
import React from 'react';
import { Jumbotron, Button, Container, Card, CardTitle, CardText, Col, Row } from 'reactstrap';
import SliderCarousel from './SliderCarousel';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron class="jumboron JumboImg" fluid>
                    <Container fluid>
                        <img src="" ></img>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <Button outline color="success">see my works here</Button>
                    </Container>
                </Jumbotron>


                <h3 className="headers">MY KNOWLEDGE BASE</h3>
                <hr className="headersLine"></hr>
                <Row>
                    <Col sm="6">
                        <Card body color="">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card body inverse color="success" >
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>


                <h3 className="headers">CLIENT PORTFOLIO</h3>
                <hr className="headersLine"></hr>

                <SliderCarousel className="carousel" />

                <h3 className="headers">WHAT I CAN OFFER</h3>
                <hr className="headersLine"></hr>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card body inverse color="success" >
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6">
                        <Card body color="">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Home
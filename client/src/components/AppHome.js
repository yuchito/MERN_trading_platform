import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardText,
    CardTitle, CardGroup, Button, UncontrolledCarousel, Jumbotron
} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';

// using react router , route
const items = [
    {
        src: '/images/tradingImg.jpg',
        altText: 'Slide 1',
        caption: "Never miss a trade with BartCoin's powerful platform. Access real-time charting, open and close positions and enjoy the trading tools",
        header: 'Discover BartCoins Trading Apps',
        key: '1'
    },
    {
        src: '/images/daytrading.jpg',
        altText: 'Slide 2',
        caption: "Trade the world's most popular markets. Gain access to one-click trading, fast trade executions, real-time market data, in-depth market analysis and advanced trading tools",
        header: 'Trade the Markets Anytime, Anywhere ',
        key: '2'
    }
];
class AppHome extends Component {

    render() {
        return (
            <div>
                <UncontrolledCarousel items={items} />
                <Jumbotron className="mb-0">
                    <h1 className="display-4">Why BartCoin ?</h1>
                    <br />
                    <CardGroup color='info'>
                        <Card body outline color="info" >
                            <CardImg top height='50%' src='images/security.jpg' alt='img1' />
                            <CardBody>
                                <CardTitle><h1 className="display-5">Trade with security</h1></CardTitle>
                                <CardText>At BartCoin, we take your security and privacy seriously. That's why we employ world-class measures to help keep your portfolio safe</CardText>
                            </CardBody>
                        </Card>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='images/technology.jpg' alt='img2' />
                            <CardBody>
                                <CardTitle><h1 className="display-5">Cutting-Edge Technology</h1></CardTitle>
                                <CardText>Trade on a suite of powerful trading platforms designed to meet the demanding needs of active traders looking for maximum performance, flexibility and speed</CardText>
                            </CardBody>
                        </Card>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='/images/worldwide.jpg' alt='img3' />
                            <CardBody>
                                <CardTitle><h1 className="display-5">World Wide Support</h1></CardTitle>
                                <CardText>Trade the world’s currency markets along with the most popular share, index and commodity CFDs</CardText>
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <br />
                    <Button color="primary">Learn More</Button>
                    <hr className="my-2" />
                    <h1 className="display-4">Learn How To Trade Like a Pro</h1>
                    <h5>Develop your trading strategies and skills with our professional tools, education resources and daily reviews of market</h5>
                    <br />
                    <CardGroup color='info'>
                        <Card body outline color="info" >
                            <CardImg top height='50%' src='images/news.jpg' alt='img1' />
                            <CardTitle><h1 className="display-3">News and Analysis</h1></CardTitle>
                            <Button color='dark'>Learn More</Button>
                        </Card>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='images/markets.jpg' alt='img2' />
                            <CardTitle><h1 className="display-3">Markets Review</h1></CardTitle>
                            <Button color='dark'>Learn More</Button>
                        </Card>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='/images/training.jpeg' alt='img3' />
                            <CardTitle><h1 className="display-3">Trading Guidelines</h1></CardTitle>
                            <Button color='dark'>Learn More</Button>
                        </Card>
                    </CardGroup>
                    <hr className="my-2" />
                    <Card body inverse color="info">
                        <div className="small-12 medium-12 large-10 column align-center ">
                            <h3>Ready to trade?</h3>
                            <h4>Get started with your BartCoin account today</h4>
                            <RegisterModal />
                            {/* <Button color="primary" className="mr-2">Open account</Button> */}
                            <LoginModal />
                        </div>
                    </Card>
                    <hr className="my-2" />
                    <h1 className="display-4">Contact us</h1>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Type your email" style={{ width: '600px', height: '40px' }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" name="message" id="exampleText" placeholder="Type your message" style={{ width: '600px', height: '200px' }} />
                        </FormGroup>
                        <Button color='primary'>Submit</Button>
                        {/* <Button color='primary'>Submit</Button> */}
                    </Form>
                    <hr className="my-2" />
                </Jumbotron>
            </div>
        );
    }
}

export default AppHome;

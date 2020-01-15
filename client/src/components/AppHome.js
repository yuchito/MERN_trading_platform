import React, { Component } from 'react';
// import { postman } from '/images/postman';
import {
    Card, CardImg, CardBody,
    CardTitle, CardGroup, Button, UncontrolledCarousel, Jumbotron
  } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
  
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
        return(
            <div>
                <UncontrolledCarousel items={items} />
                <Jumbotron>
                    <h1 className="display-3">Why BartCoin ?</h1>
                    <br />
                    <CardGroup body color='info'>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='images/security.jpg' alt='img1' />
                            <CardBody>
                                <CardTitle><h1 className="display-4">Trade with security</h1></CardTitle>
                            </CardBody>
                        </Card>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='images/technology.jpg' alt='img2' />
                            <CardBody>
                                <CardTitle><h1 className="display-4">Cutting-Edge Technology</h1></CardTitle>
                            </CardBody>
                        </Card>
                        <Card body outline color="info">
                            <CardImg top height='50%' src='/images/worldwide.jpg' alt='img3' />
                            <CardBody>
                                <CardTitle><h1 className="display-4">World Wide Support</h1></CardTitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <br /> 
                    <Button color="primary">Learn More</Button>
                    <hr className="my-2" /> 
                    <h1 className="display-3">Contact us</h1>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Type your email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" name="message" id="exampleText" />
                        </FormGroup>
                        <Button color='primary'>Submit</Button>
                    </Form>
                    <hr className="my-2" /> 
                </Jumbotron>
            </div>    
        );
    }
}

export default AppHome;

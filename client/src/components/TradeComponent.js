import React, { Component } from 'react';
import {
    Card, CardImg,
    CardTitle, CardGroup, Button, Table, Jumbotron
} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

// using react router , route

class TradeComponent extends Component {

    render() {
        return (
            <div>
                <Table className='ml-4 mr-4' hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bitcoin BTC</td>
                            <td>840 Euros</td>
                            <td>-2.73%</td>
                            <td><Button color='success'>Buy</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Bartcoin BRC</td>
                            <td>100 Euros</td>
                            <td>-0.73%</td>
                            <td><Button color='success'>Buy</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ethereum ETH</td>
                            <td>160 Euros</td>
                            <td>-5.43%</td>
                            <td><Button color='success'>Buy</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Bitcoin Cash BCH</td>
                            <td>320 Euros</td>
                            <td>-0.19%</td>
                            <td><Button color='success'>Buy</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Litecoin LTC</td>
                            <td>60 Euros</td>
                            <td>-4.18%</td>
                            <td><Button color='success'>Buy</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <Jumbotron className="mb-0">
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
                    <h1 className="display-4">Contact us</h1>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Type your email" style={{ width: '300px', height: '40px' }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" name="message" id="exampleText" placeholder="Type your message" style={{ width: '300px', height: '150px' }} />
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

export default TradeComponent;

import React, { Component } from 'react';
import {
  Navbar,
  CardFooter
  
} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

class AppFooter extends Component {


  render() {
    return(
      <div>
      <Navbar color="dark" dark expand="sm" className="mb-0">
        <CardFooter className="text-muted">
            <div className="row footer-sitemap">
                <div className="small-1 large-5 column map-markets">
                    <h6>Products</h6>
                    <ul className="show-for-medium">
                    <li>
                        <a href='/' title="Indices">Indices</a>
                    </li>
                    <li>
                        <a href='/' title="Commodities">Commodities</a>
                    </li>
                    <li>
                        <a href='/' title="Shares">Shares</a>
                    </li>
                    <li>
                        <a href='/' title="Forex">Forex</a>
                    </li>
                    <li>
                        <a href='/' title="CryptoCurrencies">CryptoCurrencies</a>
                    </li>
                    <li>
                        <a href='/' title="ETFs">ETFs</a>
                    </li>
                    <li>
                        <a href='/' title="Bonds">Bonds</a>
                    </li>
                    <li>
                        <a href='/' title="CFDs list">CFDs list</a>
                    </li>
                    </ul>
                </div>
                <div className="small-6 large-2 column map-markets">
                    <h6>Technical Analysis</h6>
                    <ul className="show-for-medium">
                    <li>
                        <a href='/' title="Economic">Economic Calendar</a>
                    </li>
                    <li>
                        <a href='/' title="AutoChartist">AutoChartist Market</a>
                    </li>
                    <li>
                        <a href='/' title="Reports">Reports & Alerts</a>
                    </li>
                    </ul>
                </div>
                <div className="small-6 large-2 column map-markets">
                    <h6>Education</h6>
                    <ul className="show-for-medium">
                    <li>
                        <a href='/' title="Videos">Videos Tutorials</a>
                    </li>
                    <li>
                        <a href='/' title="Courses">Courses</a>
                    </li>
                    <li>
                        <a href='/' title="Trading">Trading Info</a>
                    </li>
                    </ul>
                </div>
                <div className="small-6 large-2 column map-markets">
                    <h6>Support</h6>
                    <ul className="show-for-medium">
                    <li>
                        <a href='/' title="About">About Us</a>
                    </li>
                    <li>
                        <a href='/' title="Contact">Contact Us</a>
                    </li>
                    <li>
                        <a href='/' title="FAQ">FAQ</a>
                    </li>
                    </ul>
                </div>
                <div className="small-12 large-5 column map-markets">
                    <h6>Contact Us</h6>
                    <h6>Email: contact@bartcoins.fr | Phone: + 33 000 000 12 </h6>
                </div>
                <div className="small-6 large-2 column map-markets">
                    <h6>Connect With Us</h6>
                    <ul className="show-for-medium">
                    <li>
                        <SocialIcon url='https://twitter.com/' className='mb-2'/>
                    </li>
                    <li>
                        <SocialIcon url='https://www.facebook.com/' className='mb-2'/>
                    </li>
                    <li>
                        <SocialIcon url='https://www.instagram.com/'/>
                    </li>
                    </ul>
                </div>
                <div className="small-6 large-2 column map-markets">
                <div class="medium-6 column text-right">
            © All rights reserved to BartCoin
        </div>
                </div>
            </div>   
            </CardFooter> 
      </Navbar>
    </div>
    );
    
  }
}

export default AppFooter;
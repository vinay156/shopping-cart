import React from 'react';
import Navbar from '../components/navbar';
import '../styles/about.css'

const About = (props) => {
    return ( 
        <div >
            <Navbar quantity={props.quantity}/>
            <div className="about">
                <h1>Online Shopping Plateform</h1>
                <p>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services
                from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by
                visiting the website of the retailer directly or by searching among alternative vendors using a shopping search
                engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers
                can shop online using a range of different computers and devices, including desktop computers, laptops,
                tablet computers and smartphones.</p>
                <div>
                    <a href="https://www.linkedin.com/in/vinay-kumar-goyal-002809179/">Linkedin Profile</a>
                    <a href="https://github.com/vinay156">Github</a>
                    <h1>Thank You !!</h1>
                </div>
            </div>
        </div>
    );
}
 
export default About;
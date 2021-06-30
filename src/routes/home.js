import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../styles/home.css'

const Home = (props) => {

    return (
        <div>
            <Navbar quantity={props.quantity}/>
            <div className="home">
                <h1>Your Shopping is Here !!</h1>
                <Link to="/shop">Shop Now  :-)</Link>
            </div>
        </div>
        );
}
 
export default Home;
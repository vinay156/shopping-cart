import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = (props) => {
    return (
        <div className="container">
            <header>
                <nav>
                <Link to="/">Home</Link>
                <div className="nav-right">
                    <Link to="/shop">Shop</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/cart">
                        Cart ({props.quantity})
                    </Link>
                </div>
                </nav>
            </header>
            {props.children}
        </div>
    );
}
 
export default Navbar;
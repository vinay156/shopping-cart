import React from 'react';
import Navbar from '../components/navbar';
import ProductsList from '../components/productsList';
import '../styles/shop.css'

const Shop = (props) => {
    return ( 
        <div>
            <Navbar quantity={props.quantity} />
            <div className="shop">
                <h1>Shop</h1>
                <ProductsList products={props.products} />
            </div>
        </div>
    );
}
 
export default Shop;
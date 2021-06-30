import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Product from './productItem';
import '../styles/productList.css'

class ProductsList extends Component {
    render() {
        const {products} = this.props; 
        return (
            <div className="product-list">
                {products.map((product,i)=>(
                    <Link to={`/product/${product.name}`}>
                        <Product 
                            name={product.name}
                            img={product.img}
                            price={product.price}
                        />
                    </Link>
                ))}
                
            </div>
        );
    }
}
 
export default ProductsList;
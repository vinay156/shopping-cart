import React from 'react';
import {useParams} from 'react-router-dom';
import Navbar from '../components/navbar';
import '../styles/productDetail.css'

const ProductDetail = (props) => {
    const {name} = useParams();
    const qty = 1;
    const product = props.products.filter((product)=> product.name === name)[0];

    return ( 
        <>
        <Navbar quantity={props.quantity}/>
        <div className="product-detail">
            <div className="product-left">
                <img src={product.img} alt="" />
            </div>
            <div className="product-right">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
                    repellendus sapiente doloribus quas in, recusandae dolore voluptatem
                    beatae vero aliquid laudantium suscipit cupiditate veniam porro
                    laborum veritatis esse quam.
                </p>
                <div>
                    <button 
                        onClick={() => props.handleCartAddition(product.id, qty)}
                        className="add-to-cart-btn"
                    >
                    Add to cart
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default ProductDetail;


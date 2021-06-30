import React, { useState } from 'react';
import { Route, Switch} from 'react-router-dom'
import About from '../routes/about';
import Cart from '../routes/cart';
import Home from '../routes/home';
import Shop from '../routes/shop'
import products from '../product'
import ProductDetail from '../routes/productDetail';

const App = () => {
    const [cart, setCart] = useState([]); 

    const handleCartAddition = (productId, quantity) => {
        const exist = cart.find((item) => item.id === productId);
        if (exist) {
            setCart(cart.map(x => x.id === productId ? {...exist, quantity: exist.quantity+quantity} : x));
        }else{
            setCart([...cart, {...products[productId], quantity:1}]);
        }
    };

    const handleQuantityChange = (productCartIndex, quantity) => {
        const newCart = [...cart];
        if (quantity < 1) {
            return;
        }
        const product = newCart[productCartIndex];
        product.quantity = quantity;
        newCart.splice(productCartIndex, 1, product);
        setCart(newCart);
    };

    const handleCartDeletion = (productCartIndex) => {
        const newCart = [...cart];
        newCart.splice(productCartIndex, 1);
        setCart(newCart);
    };

    const cartLength = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      }, 0);
    return ( 
        <div>
            <Switch>
                <Route exact path="/">
                    <Home quantity={cartLength} />
                </Route>
                <Route exact path="/shop">
                    <Shop 
                    quantity={cartLength} 
                    products={products}
                    />
                </Route>
                <Route exact path="/product/:name">
                    <ProductDetail 
                    quantity={cartLength}
                    products={products}  
                    handleCartAddition={handleCartAddition}
                    />
                </Route>
                <Route exact path="/cart">
                    <Cart 
                    quantity={cartLength} 
                    cart={cart}
                    handleCartAddition={handleCartAddition}
                    handleQuantityChange={handleQuantityChange}
                    handleCartDeletion={handleCartDeletion} 
                    />
                </Route>
                <Route exact path="/about">
                    <About quantity={cartLength} />
                </Route>
            </Switch>
        </div>
    );
}
 
export default App;
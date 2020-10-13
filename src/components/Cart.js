import React, { useState } from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';


const Cart = ({ cartItems, removeFromCart, makeOrder }) => {
    const [checkout, setCheckout] = useState(false);
    const [details, setDetails] = useState({ name: "", email: "", address: "" });

    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: details.name,
            email: details.email,
            address: details.address,
            cartItems: cartItems,
        };
        makeOrder(order);
    }

    const handleInput = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
        console.log(details)
    }
    return (
        <div>
            {cartItems.length === 0
                ?
                (<div className="cart cart-header">Cart is empty</div>)
                :
                (<div className="cart cart-header">You have {cartItems.length} in the cart</div>)}
            <div>
                <div className="cart" >
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => {
                                return (
                                    <li key={item._id}>
                                        <div>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div>
                                            <div>{item.title}</div>
                                            <div className="right">
                                                {formatCurrency(item.price)} x {item.count} {" "}
                                                <button className="button" onClick={() => removeFromCart(item)}>Remove</button>
                                            </div>
                                        </div>
                                    </li>);
                            })}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (

                    <div>
                        <Fade top collapse>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(cartItems.reduce((a, c) => a + (c.price * c.count), 0))}
                                    </div>
                                    <button onClick={() => {
                                        setCheckout(true)
                                    }} className="button primary">Proceed</button>
                                </div>
                            </div>
                        </Fade>
                        {checkout && (
                            <div className="cart">
                                <Fade right cascade>
                                    <form onSubmit={createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    onChange={handleInput}
                                                ></input>
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    onChange={handleInput}
                                                ></input>
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input
                                                    name="address"
                                                    type="text"
                                                    required
                                                    onChange={handleInput}
                                                ></input>
                                            </li>
                                            <li>
                                                <button className="button primary" type="submit">
                                                    Checkout
                                            </button>
                                            </li>
                                        </ul>
                                    </form>
                                </Fade>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>


    )

}

export default Cart;
// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateItemTotal = (item) => {
    return item.item.price * item.quantity;
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateItemTotal(item);
    }, 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (


    <><h2>Checkout</h2>
    <div style={{display: 'flex', justifyContent: 'center', columnGap: '20px', padding:'0px 30px'}}className="cart-container">
      
<div style={{display: 'flex', flex: '1', rowGap: '15px',  flexDirection: 'column'}}>
      <div style={{border: '1px solid black', padding: '15px'}}> <h3>Delivery</h3>

<p>Instant online access to tickets</p>

      </div>

      <div style={{border: '1px solid black', padding: '15px'}}> <h3>Payment</h3>
<h4> Use Credit / Debit</h4>
<div style={{display: 'flex', columnGap: '5px', marginTop: '-5px'}}>
     <input type="radio" checked /> <h4>Visa - 1234</h4> </div>
  </div>
      </div>
      <div style={{border: '1px solid black',flex: '1', padding: '15px'}}><h3> Total ${calculateGrandTotal()}</h3>
        
        
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          
            {cartItems.map((item) => (
              <div style={{margin:'5px 0px'}}>
                {item.item.title} - x {item.quantity} Total Price: ${calculateItemTotal(item)}
               
              </div>
            ))}
          
          <p>Shipping: Free</p>

   <div style={{display: 'flex', margin: '0px 0px'}}>       <input type="checkbox" checked/> <span>I agree to the terms and conditions</span> </div>
<br/>
          <button style={{ backgroundColor:'#5ab863', color: 'white'}}>Pay Now</button>
        </div>
      )}</div>
      


    </div></>
  );
};

export default Checkout;
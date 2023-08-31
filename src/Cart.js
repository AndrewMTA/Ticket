import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';
import {Link } from "react-router-dom"
const Cart = () => {
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

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <div style={{width: '100%', padding: ' 0px 35px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table style={{width: '100%', textAlign: 'center'}}> 
          <thead style={{backgroundColor:'gray'}}>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
          
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {cartItems.map((item) => (
              <tr style={{backgroundColor:'#e8e8e8', border:'1px solid blue'}} key={item.item.id}>
                <td >{item.item.title}</td>
                <td>
                  <button style={{margin:"0px 5px"}}onClick={() => handleQuantityChange(item.item.id, item.quantity - 1)}>-</button>
                  {item.quantity}
                  <button style={{margin:"0px 5px"}}onClick={() => handleQuantityChange(item.item.id, item.quantity + 1)}>+</button>
                </td>
                
                <td>${calculateItemTotal(item)}</td>
            
                <td>
                  <button onClick={() => handleRemoveItem(item.item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <br/><br/>
          <tfoot>
            <tr>
              <td colSpan="3">Total Items: {calculateTotalItems()}</td>
              <td colSpan="2">Grand Total: ${calculateGrandTotal()}</td>
            </tr>
          </tfoot>
        </table>
      )}
    <Link to="/Checkout">< button style={{marginTop:'-25px', position: 'absolute'}}>Checkout</button></Link>  
    </div>
  );
};

export default Cart;

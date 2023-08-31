
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowPage from './ShowPage';
import CheckoutPage from './CheckoutPage';
import Cart from './Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ShowPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
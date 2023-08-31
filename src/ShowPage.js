import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import cart from "./cart.png"

const ShowPage = () => {
  const dispatch = useDispatch();
  const totalNumberOfItems = useSelector(state => state.cart.totalNumberOfItems);
  // Placeholder show data with quantity
  const [shows, setShows] = useState([
    {
      id: 1,
      title: 'Drake',
      description: 'Chicago IL, Jul 7th',
      price: 90,
      image: 'https://example.com/show1-image.jpg',
      quantity: 1,
    },
    {
      id: 2,
      title: 'SZA',
      description: 'Detroit MI, Jul 15th',
      price: 50,
      image: 'https://example.com/show2-image.jpg',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Tyler The Creator',
      description: 'Los Angeleos CA, Jul 18th',
      price: 60,
      image: 'https://example.com/show3-image.jpg',
      quantity: 1,
    },
    {
      id: 4,
      title: 'Harry Styles',
      description: 'Miami Fl, Jul 7th',
      price: 60,
      image: 'https://example.com/show1-image.jpg',
      quantity: 1,
    },
    {
      id: 5,
      title: 'Rhianna',
      description: 'New York City, NY, Jul 7th' ,
      price: 100,
      image: 'https://example.com/show2-image.jpg',
      quantity: 1,
    },
    {
      id: 6,
      title: 'Justin Bieber',
      description: 'Austin, TX, Jul 9th',
      price: 100,
      image: 'https://example.com/show3-image.jpg',
      quantity: 1,
    },
  ]);

  const addToCartHandler = (selectedShow) => {
    dispatch(addToCart({ item: selectedShow, quantity: selectedShow.quantity }));
  };

  const handleQuantityChange = (event, showId) => {
    const updatedShows = shows.map((show) => {
      if (show.id === showId) {
        return { ...show, quantity: parseInt(event.target.value, 10) };
      }
      return show;
    });
    setShows(updatedShows);
  };

  const handleDecreaseQuantity = (showId) => {
    const updatedShows = shows.map((show) => {
      if (show.id === showId && show.quantity > 1) {
        return { ...show, quantity: show.quantity - 1 };
      }
      return show;
    });
    setShows(updatedShows);
  };

  const handleIncreaseQuantity = (showId) => {
    const updatedShows = shows.map((show) => {
      if (show.id === showId) {
        return { ...show, quantity: show.quantity + 1 };
      }
      return show;
    });
    setShows(updatedShows);
  };

  return (
    <div style={{ padding: '10px 30px' }}>
      <div className="shows-container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>  <h1>Upcoming Shows</h1> <Link to="cart"><div > <img style={{ width: "45px", objectFit: "contain" }} src={cart} /><span style={{ backgroundColor: '#58dba9', color: 'white', padding: "2px 8px", borderRadius: '100px', marginLeft: "-15px", border: '2px solid white ', outline: "none" }}>{totalNumberOfItems}</span></div></Link></div>


        <div className='grid'>
          {shows.map((show) => (
            <div className="show-container" style={{ border: '1px solid black', borderRadius: '10px', width: '100%', margin: '0px', maxWidth: '325px', padding: '15px' }} key={show.id}>

              <div>
                <div className="show-details">
                  <div style={{ display: 'flex', columnGap: '12px' }}>
                    <h2>{show.title}</h2> <h2>${show.price}</h2 ></div>
                  <p style={{ marginTop: '0px' }}>{show.description}</p>

                </div>
                <div style={{ marginTop: '15px' }} className="show-actions">
                  <button style={{ padding: "5px 6px" }} onClick={() => handleDecreaseQuantity(show.id)}>-</button>
                  <input
                    style={{ width: '25px', padding: '5px', textAlign: 'center' }}
                    type="number"
                    min="1"
                    value={show.quantity}
                    onChange={(event) => handleQuantityChange(event, show.id)}
                  />
                  <button onClick={() => handleIncreaseQuantity(show.id)}>+</button>
                  <button style={{ backgroundColor: "#5ab863" , color: 'white' }} onClick={() => addToCartHandler(show)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}</div>
      </div>

    
    </div>
  );
};

export default ShowPage;
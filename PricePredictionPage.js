// PricePredictionPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const PricePredictionPage = () => {
  const sellerName = 'Seller Name'; // Replace with actual seller name

  return (
    <div>
      {/* Car details section */}
      <h2>Car Details</h2>
      {/* Display car details here */}

      {/* Want to know more about the car section */}
      <div>
        <h2>Want to know more about the car?</h2>
        <p>Talk to the seller securely.</p>
        <Link to={`/chat/${sellerName}`}>
          <button>Chat with Seller</button>
        </Link>
      </div>
    </div>
  );
};

export default PricePredictionPage;

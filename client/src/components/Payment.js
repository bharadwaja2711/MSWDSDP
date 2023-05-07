import React, { useState } from 'react';

function Payment() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <h1>Payment Gateway</h1>
      <h2>Available Products</h2>
      <label>
        <input type="checkbox" name="newsletter" />
        1.Vintage clock - 6500
        <br />
      </label>
      <label>
        <input type="checkbox" name="newsletter" />
        2.Continental Refrigerator - 29200
        <br />
      </label>
      <label>
        <input type="checkbox" name="newsletter" />
        3.Outdoor AED Cabinets - 2500
        <br />
      </label>
      <label>
        <input type="checkbox" name="newsletter" />
        4.CRT Monitor - 7200
        <br />
      </label>
      <label>
        <input type="checkbox" name="newsletter" />
        5.Gramphone - 3300
        <br />
      </label>
      <button onClick={handleButtonClick}>Proceed to Payment</button>
      {isClicked && (
        <img
          src="https://assetscdn1.paytm.com/images/catalog/product/F/FU/FULPAYTM-ALL-INOCL-87034613C09143/0..jpg?imwidth=320&impolicy=hq"
          alt="Payment Gateway"
          style={{ display: 'block', margin: 'auto' }}
        />
      )}
    </div>
  );
}

export default Payment;

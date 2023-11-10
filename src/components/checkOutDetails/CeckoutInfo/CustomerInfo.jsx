import React, { useState } from 'react';

export const CustomerInfo = () => {
  const months = [
    'Select Months',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (month) => {
    setSelectedMonth(month);
    setShowOptions(false);
  };

  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    cvc: '',
    year: '',
  });

  const handleCheckoutInfoChange = (event) => {
    setCheckoutInfo({
      ...checkoutInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send checkoutInfo to server for processing
  };
  return (
    <>
      <div className="clientInfo">
        <h3>Customer Info</h3>

        <div className="customerInfo">
          <form onSubmit={handleSubmit} id="personalInfo" className="d_flex">
            <div className="dc_flex">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={checkoutInfo.name}
                onChange={handleCheckoutInfoChange}
              />
            </div>
            <div className="dc_flex">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                value={checkoutInfo.email}
                onChange={handleCheckoutInfoChange}
              />
            </div>
            <div className="dc_flex">
              <label>Phone:</label>
              <input
                type="number"
                name="Phone"
                placeholder="Phone"
                required
                value={checkoutInfo.phone}
                onChange={handleCheckoutInfoChange}
              />
            </div>
          </form>

          <form onSubmit={handleSubmit} id="address" className="d_flex">
            <div className="dc_flex">
              <label>Address:</label>
              <input
                className="address"
                type="text"
                name="address"
                placeholder="Address"
                required
                value={checkoutInfo.address}
                onChange={handleCheckoutInfoChange}
              />
            </div>
            <div className="dc_flex">
              <label>Zip:</label>
              <input
                type="number"
                name="zip"
                placeholder="Zip code"
                required
                value={checkoutInfo.zip}
                onChange={handleCheckoutInfoChange}
              />
            </div>
          </form>
        </div>

        <div className="PaymentInfo">
          <h3>Payment Info</h3>

          <form onSubmit={handleSubmit} id="CardInfo" className="d_flex">
            <div className="dc_flex">
              <label>Name on Card:</label>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                required
                value={checkoutInfo.cardName}
                onChange={handleCheckoutInfoChange}
              />
            </div>

            <div className="dc_flex">
              <label>Card Number:</label>
              <input
                type="number"
                name="name"
                placeholder="1234 1234 1234"
                required
                onChange={handleCheckoutInfoChange}
                value={checkoutInfo.cardNumber}
              />
            </div>

            <div className="dc_flex">
              <label>CVC:</label>
              <input
                type="number"
                name="cvc"
                placeholder="123"
                required
                onChange={handleCheckoutInfoChange}
                value={checkoutInfo.cvc}
              />
            </div>
          </form>

          <form
            onSubmit={handleSubmit}
            id="cardDate"
            className="f_flex cardDate"
          >
            <div className="dc_flex">
              <label>Month</label>
              <button className="select" onClick={toggleOptions}>
                {selectedMonth}
              </button>
              {showOptions && (
                <ul>
                  {months.map((month) => (
                    <li key={month} onClick={() => handleOptionClick(month)}>
                      {month}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="dc_flex">
              <label>Year</label>
              <input
                type="number"
                name="Year"
                placeholder="Year"
                required
                onChange={handleCheckoutInfoChange}
                value={checkoutInfo.year}
              />
            </div>
          </form>
        </div>

        <button type="submit" className="checkoutButton">
          Complete Checkout and Pay
        </button>
      </div>
    </>
  );
};

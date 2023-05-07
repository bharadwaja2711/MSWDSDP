import React,{ useState } from 'react';
import axios from 'axios';
import './css/Bids.css'

function Bids() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [bidStartsAt, setBidStartsAt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/insertBid', {
      name: name,
      price: price,
      description: description,
      bidStartsAt: bidStartsAt
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }  

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{ width: "100%", padding: "5px" }}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price" style={{ display: "block" }}>
            Price:
          </label>
          <input
            type="text"
            id="price"
            style={{ width: "100%", padding: "5px" }}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description" style={{ display: "block" }}>
            Description:
          </label>
          <textarea
            id="description"
            style={{ width: "100%", padding: "5px" }}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="time-input" style={{ display: "block" }}>
            Bid Starts at:
          </label>
          <input 
            type="datetime-local" 
            id="time-input" 
            name="time" 
            value={bidStartsAt}
            onChange={(event) => setBidStartsAt(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="file" style={{ display: "block" }}>
            Choose a file:
          </label>
          <input
            type="file"
            id="file"
            accept=".jpg,.jpeg,.png"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{ display: "block", width: "100%", padding: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Bids;

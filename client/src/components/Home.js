import React from 'react';

function Home(props) {
  console.log(props);

  if (props.store.getState().AuthReducer[0] == null) {
    props.store.dispatch({ type: 'login', data: { un: props.un, role: 1 } });
  }

  return (
    <div>
      <div id="header">
        <h1>Bidding Systems | Bidzone</h1>
      </div>

      <div className="video-wrapper">
      <iframe width="800" height="450" src="https://www.youtube.com/embed/nWPvVhGhfPI" frameborder="0" allowfullscreen></iframe>

      </div>

      <div id="content">
        <h2>Welcome to Bidzone!</h2>

        <p>
          Bidding systems are used to sell goods or services to the highest
          bidder, commonly in auctions or online marketplaces. The seller sets a
          starting price, and potential buyers bid against each other until a
          final winning bid is determined. Different auction structures include
          English, Dutch, and Vickrey auctions. Bidding systems can be
          implemented online or in-person and have different rules such as
          minimum bid increments and bid expiration times.
        </p>

        <p>
          At Bidzone, we provide a reliable and secure platform for buyers and
          sellers to participate in bidding systems. Our platform ensures fair
          play and transparency, so you can be confident that you're getting the
          best deal possible.
        </p>
      </div>

      <div id="footer">
        <p>&copy; Bidzone 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;

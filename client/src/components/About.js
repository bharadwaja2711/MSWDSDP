import React from 'react';
import './css/About.css'

function About() {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <p className="description">
      Welcome to our bidding system! We are a leading provider of online bidding solutions, dedicated to helping businesses and organizations streamline their procurement processes.

      Founded in 2023, we have grown steadily over the years, expanding our capabilities and building a strong reputation for quality and reliability. Our mission is to provide our clients with a simple, user-friendly bidding platform that saves them time and money, while also improving their procurement outcomes.

      At our core, we believe in honesty, transparency, and fairness. We strive to create a level playing field for all bidders, and we are committed to providing exceptional service and support to all of our clients.

      Our team is made up of industry experts with deep experience in procurement, technology, and customer service. We are passionate about what we do, and we are always looking for new ways to innovate and improve our platform.
      </p>
      <ul className="team-members">
        <li className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" className="team-member-image" />
          <h2 className="team-member-name">BALAJI</h2>
          <p className="team-member-role">LEAD</p>
        </li>
        <li className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" className="team-member-image" />
          <h2 className="team-member-name">MANOJ BHARADWAJ</h2>
          <p className="team-member-role">ADMIN 1</p>
        </li>
        <li className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" className="team-member-image" />
          <h2 className="team-member-name">Praneeth</h2>
          <p className="team-member-role">ADMIN 2</p>
        </li>
      </ul>
    </div>
  );
}

export default About;

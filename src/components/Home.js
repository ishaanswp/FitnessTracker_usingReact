import React from 'react';
import './styles/Home.css'; // Import the CSS file

function Home() {
  return (
    <div>
      <section className="banner">
        <h1>Welcome to Fitness Tracker</h1>
        <p>Track your workouts, set goals, and achieve your fitness targets.</p>
      </section>
      <section className="registration">
        <h2>Create an Account</h2>
        <form action="dashboard.html">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            <input type="checkbox" id="showPassword" />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <div className="form-row">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;

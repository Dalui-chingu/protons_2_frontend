import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import evimg from "/ev_charge_station.png";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer'
import { useUserStore } from '../../stores/userStore';
function Login() {
  const {userDetail,setUserDetail} = useUserStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_PORT_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pwd: password }),
      });

      const responseData = await response.json();

      if (response.status === 200) {
        // Login successful, you can navigate to another page or perform additional actions
        console.log('Login successful', responseData.user);
        setUserDetail(responseData.user);
        navigate('/home');
      } else {
        // Handle other status codes if needed
        console.error('Login failed', responseData.message);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <>
    <Navbar/>
      <section className="contact-page" style={{ paddingTop: '50px' }}>
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Sign in</h2>
              <p>
                Discover the future of convenient electric vehicle charging with our user-friendly application. Locate nearby charging stations and manage your charging sessions effortlessly for a seamless driving experience.
              </p>
              <img src={evimg} width={'100%'} alt="EV Charging Station" />
            </div>

            <div className="contact-div__form">
              <form onSubmit={handleLogin}>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>
                  Password <b>*</b>
                </label>
                <input
                  type="password"
                  placeholder="Must have 12 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{ fontSize: '16px', paddingBottom: '30px' }}>
                  <p>Don't have an account? <span><Link style={{ color: 'red' }} to={'/register'}>Create Account</Link></span> </p>
                </div>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Login;

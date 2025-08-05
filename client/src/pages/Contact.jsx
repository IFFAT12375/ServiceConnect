import React, { useState, useEffect, use } from "react";
import { useAuth } from "../store/auth.jsx";

function Contact() {
  
  const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

  const [data, setData] = useState(defaultContactFormData);

  const { user, API } = useAuth();

  console.log("frontend user ", user.email);

  const [userData, setUserData] = useState(true);

  useEffect(() => {
  if (user && userData) {
    setData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  };
  },[user]);

     const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${API}/api/form/contact`, {
        method: "Post",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("respone: ", response);

      if(response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        alert(responseData);
        console.log("response data: ", responseData);
      } else {
        console.log("API ERROR:", response.status, response.statusText);
      }
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  autoCapitalize="off"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={data.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

export default Contact;
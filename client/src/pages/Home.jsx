import React, { useState } from "react";
import { Analytics } from "../components/Analytics";

function Home() {
  return (
     <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
            <p>Full-Stack Developer & Software Engineer</p>
              <h1>Hi, I'm Iffat Sattar</h1>
              <p>
                A passionate MERN Stack Developer with a Software Engineering degree 
                and MBA, specializing in building modern, scalable web applications. 
                I transform ideas into powerful digital solutions that drive business growth.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Get In Touch</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">View Services</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
            <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
      <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
          <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
          <p>Why Choose My Services?</p>
            <h1>Expert MERN Stack Solutions</h1>
            <p>
              With expertise in MongoDB, Express.js, React.js, and Node.js, 
              I deliver robust, scalable applications that meet modern business needs. 
              My background in Software Engineering and MBA gives me a unique perspective 
              on creating solutions that drive business value.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Start Your Project</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Explore Services</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
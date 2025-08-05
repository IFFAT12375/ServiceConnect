import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

function About() { 
    const { user } = useAuth(); 
    
    const [username, setUsername] = useState({
      username: "user.username",
    });

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome,
                {user ? ` ${user.username} to my Website` : `  to my Website`}
              </p>
              <h1>About Iffat Sattar</h1>
              <p>
                <strong>Education & Background:</strong> I hold a Software Engineering degree 
                and an MBA, combining technical expertise with business acumen to deliver 
                solutions that drive real business value.
              </p>
              <p>
                <strong>Technical Expertise:</strong> Specialized in MERN Stack development 
                with deep knowledge of MongoDB, Express.js, React.js, and Node.js. 
                I create scalable, maintainable applications that perform.
              </p>
              <p>
                <strong>Business Focus:</strong> My MBA background enables me to understand 
                business requirements and translate them into effective technical solutions 
                that align with organizational goals.
              </p>
              <p>
                <strong>Quality Assurance:</strong> I follow industry best practices, 
                write clean, documented code, and ensure your applications are secure, 
                scalable, and future-ready.
              </p>
              <p>
                <strong>Client Partnership:</strong> I believe in building long-term 
                relationships with clients, providing ongoing support and maintenance 
                to ensure your digital success.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Let's Discuss Your Project</button>
                </NavLink>
                <NavLink to="/service">
                <button className="btn secondary-btn">View My Services</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
            <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
}

export default About;
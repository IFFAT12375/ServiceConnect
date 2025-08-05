import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Register() {

const [customer, setCustomer] = useState({
  username: "",
  email: "",
  phone: "",
  password: ""
});

const navigate = useNavigate();
const { storeTokenInLS, API } = useAuth(); // Importing the function to store token

const handleInput = (event) => {
  const { name, value } = event.target;
  
  setCustomer((customer) => {
    return {
      ...customer,
      [name]: value,
    };
  });
};

 const handleSubmit = async (event) => {
    event.preventDefault();
     if (!customer.username || !customer.email || !customer.phone || !customer.password) {
    toast("Fill the form first");
    return;
  }
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
const data = await response.json(); 
    console.log("validation response:", data.message);

if (response.ok) {
    // store token in localStorage
    storeTokenInLS(data.token);
    // localStorage.setItem("token", data.token);

    setCustomer({ username: "", email: "", phone: "", password: ""});
  toast.success("Registration successful");
  navigate("/login");
}  else {
  toast.error(data.extraDetails ? data.extraDetails : data.message);  
      }
    } 
    catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
    <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="a girl is trying to do registration"
                  width="500"
                  height="500"
                />
              </div>

              {/* let tackle registration form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      // required
                      autoComplete="off"
                      value={customer.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      // required
                      autoComplete="off"
                      value={customer.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      // required
                      autoComplete="off"
                      value={customer.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      // required
                      autoComplete="off"
                      value={customer.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Register;
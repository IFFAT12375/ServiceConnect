import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Login() {
  const { user } = useAuth();
  const [customer, setCustomer] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("User logged in:", user);
    try {
      const response = await fetch(`${API}/api/auth/login`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });

const data = await response.json(); 
    console.log("validation response:",data.message);

      if (response.ok) {
    // store token in localStorage
    storeTokenInLS(data.token);
    // localStorage.setItem("token", data.token);
     toast.success("Login successful");
        // navigate("/");
        if (user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
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
                  src="/images/login.png"
                  alt=" let's fill the login form "
                  width="500"
                  height="500"
                />
              </div>

              {/* let tackle registration form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">login form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={customer.email}
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
                      required
                      autoComplete="off"
                      value={customer.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
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

export default Login;
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("Token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_APP_URI_API;

  // function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data ", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // function to get the services
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setServices(data);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("Token", serverToken);
    };

    let isLoggedIn = !!token;
 console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("Token");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading, API }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};
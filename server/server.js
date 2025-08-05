import express from 'express';
import authRoute from './Routers/auth-route.js';
import contactRoute from './Routers/contact-route.js';
import serviceRoute from './Routers/service-route.js';
import adminRoute from './Routers/admin-route.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error_middleware.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [
    'http://localhost:5173',              // Vite local dev
    'https://serviceconnect-frontend.onrender.com/'      // Deployed frontend
  ];

const corsOptions = {
    // origin: 'http://localhost:5173', // Replace with your frontend URL
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true); // Allow the request
        } else {
          callback(new Error('CORS not allowed for this origin'));
        }
      },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());


// app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
app.use("/api/admin", adminRoute);

//error handling middleware
app.use(errorMiddleware);

connectDB().then ( () => {
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
});

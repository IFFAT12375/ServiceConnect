# ServiceConnect

A full-stack web application for connecting service providers with customers. This platform provides user authentication, service management, contact forms, and an admin dashboard for managing users and services.

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://my-frontend.vercel.app](https://my-frontend.vercel.app)
- **Backend API (Render)**: [https://your-backend-api.onrender.com](https://your-backend-api.onrender.com)

## 📋 Description

ServiceConnect is a comprehensive service marketplace platform that enables users to browse, manage, and connect with various service providers. The application features user authentication, service listings, contact management, and an administrative dashboard for platform management.

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **Vite** - Fast build tool and development server
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Zod** - Schema validation
- **nodemon** - Development server with auto-restart

## ✨ Features

### User Features
- 🔐 **User Authentication** - Register, login, and logout functionality
- 👤 **User Profile Management** - Update personal information
- 📋 **Service Browsing** - View available services with details
- 📞 **Contact Form** - Send messages to service providers
- 📱 **Responsive Design** - Mobile-friendly interface

### Admin Features
- 👨‍💼 **Admin Dashboard** - Comprehensive admin panel
- 👥 **User Management** - View and manage all users
- 📝 **Contact Management** - Handle customer inquiries
- 🔧 **Service Management** - Add, edit, and remove services
- 📊 **Analytics** - View platform statistics

### Technical Features
- 🔒 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 🛡️ **Input Validation** - Zod schema validation for all inputs
- 🌐 **CORS Configuration** - Secure cross-origin requests
- ⚡ **Fast Performance** - Optimized with Vite build tool
- 📱 **Mobile Responsive** - Works on all device sizes

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ServiceConnect.git
   cd ServiceConnect
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

## 🔧 Environment Variables

### Server Environment Variables (server/.env)
Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/serviceconnect
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/serviceconnect

# JWT Configuration
JWT_SECRET_KEY=your_jwt_secret_key_here

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,https://my-frontend.vercel.app
```

### Client Environment Variables (client/.env)
Create a `.env` file in the `client` directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
# OR for production:
# VITE_API_URL=https://your-backend-api.onrender.com/api

# Frontend Configuration
VITE_APP_NAME=ServiceConnect
```

## 🏃‍♂️ Run Locally

### Start the Backend Server
```bash
cd server
npm run dev
nodemon server.js
```
The server will start on `http://localhost:3000`

### Start the Frontend Development Server
```bash
cd client
npm run dev
```
The frontend will start on `http://localhost:5173`

### Build for Production
```bash
# Build frontend
cd client
npm run build

# Start production server
cd ../server
npm start
```

## 📁 Project Structure

```
ServiceConnect/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── store/        # State management
│   │   └── assets/       # Static assets
│   ├── public/           # Public assets
│   └── package.json
├── server/                # Backend Node.js application
│   ├── config/           # Database configuration
│   ├── Controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── Models/           # MongoDB models
│   ├── Routers/          # API routes
│   ├── validators/       # Input validation
│   └── server.js         # Main server file
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Services
- `GET /api/data/services` - Get all services
- `POST /api/data/services` - Add new service (Admin)
- `PUT /api/data/services/:id` - Update service (Admin)
- `DELETE /api/data/services/:id` - Delete service (Admin)

### Contact
- `POST /api/form/contact` - Submit contact form
- `GET /api/form/contacts` - Get all contacts (Admin)

### Admin
- `GET /api/admin/users` - Get all users (Admin)
- `PUT /api/admin/users/:id` - Update user (Admin)
- `DELETE /api/admin/users/:id` - Delete user (Admin)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Contact Form**: [Contact Us](https://my-frontend.vercel.app/contact)
- **GitHub**: [https://github.com/IFFAT12375](https://github.com/IFFAT12375)
- **Linkdln**: https://www.linkedin.com/in/iffat-sattar-134b62182/
- **Email**: iffatsattar6@gmail.com

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- All contributors and supporters of this project

---

⭐ **Star this repository if you find it helpful!**

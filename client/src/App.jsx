import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Logout from './pages/Logout.jsx'
import Navbar from './components/Navbar.jsx'
import Error from './pages/Error.jsx'
import { AdminLayout } from './components/layouts/Admin-Layout.jsx'
import { AdminUsers } from './pages/Admin-Users.jsx'
import { AdminContacts } from './pages/Admin-Contatcts.jsx'
import { AdminUpdate } from './pages/Admin-Updates.jsx'

function App() {
return (
  <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<AdminLayout/>}> 
        <Route path="users" element={<AdminUsers />} />
        <Route path="contacts" element={<AdminContacts />} />
        <Route path="users/:id/edit" element={<AdminUpdate />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </>
)
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Router>
      <div>
        <h1 className="font-weight-bold">Social Media Analytics Dashboard</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/add-user" element={<UserForm />} />
          <Route path="/edit-user/:id" element={<UserForm />} />
        </Routes>
       <Footer></Footer>
      </div>
       
    </Router> 
   
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import "../assets/css/UserList.css"

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('There was an error fetching the users!', error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDelete = (userId) => {
    axios.delete(`/api/users/${userId}`)
      .then(() => {
        // Remove the deleted user from the list
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error('There was an error deleting the user!', error));
  };

  const topUser = users.reduce((prev, current) => (prev.followers > current.followers) ? prev : current, {});

  return (
    <div className={`container mt-4 ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`header ${users.length === 0 ? 'd-none' : ''}`}>
        <h1>{topUser.name}</h1>
        <p>{topUser.bio}</p>
        <div className="header-buttons">
          <Link to={`/user/${topUser.id}`} className="itinerary-btn">View</Link>
          <Link to={`/edit-user/${topUser.id}`} className="distance-btn">Edit</Link>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
        <Link to="/add-user" className={`btn btn-primary ${darkMode ? 'btn-outline-light' : ''}`}>Add User</Link>
      </div>

      <h2 className={darkMode ? 'text-light' : ''}>Users</h2>
      <div className="list">
        {users.map(user => (
          <div key={user.id} className={`list-item ${darkMode ? 'dark-mode-item' : ''}`}>
            <div className="list-item-image-container">
              <img className="list-item-image" src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="UserIcon" />
            </div>
            <div className="list-item-content">
              <Link to={`/user/${user.id}`} className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`}>
                <h2>{user.name}</h2>
              </Link>
              <p className={darkMode ? 'text-muted' : ''}>Category: {user.category}</p>
              <p className={darkMode ? 'text-muted' : ''}>Bio: {user.bio}</p>
              <p className={darkMode ? 'text-muted' : ''}>Followers: {user.followers}</p>
              <p className={darkMode ? 'text-muted' : ''}>Following: {user.following}</p>
              <p className={darkMode ? 'text-muted' : ''}>Posts: {user.posts}</p>
              <button
                className={`btn btn-danger ${darkMode ? 'btn-outline-light' : ''}`}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
            <div className="list-item-actions">
              <Link to={`/user/${user.id}`} className={`text-decoration-none text-right`}>
                <p className='text-lg-right'>View More</p>
              </Link>
            
            </div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default UserList;

import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/UserDetails.css'; // Import custom CSS

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`/api/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('There was an error fetching the user!', error));
  }, [id]);

  if (!user) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-primary mb-4">Back to User List</Link>
      <div className="profile-card shadow-lg p-4 mb-4 rounded">
        <div className="profile-header d-flex align-items-center mb-4">
        <div className="profile-picture-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-person-circle profile-picture" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </div>
          <div className="profile-info ms-3">
            <h2 className="profile-name mb-0">{user.name}</h2>
            <p className="profile-category">{user.category}</p>
            <p className="profile-bio">{user.bio}</p>
            <Link to={`/edit-user/${user.id}`} className="btn btn-success p-3"><span>Edit details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg></span></Link>
          </div>
        </div>
        <div className="profile-stats d-flex justify-content-around mb-4">
          <div className="stat-item">
            <h4 className="stat-count">{user.followers}</h4>
            <p className="stat-label">Followers</p>
          </div>
          <div className="stat-item">
            <h4 className="stat-count">{user.following}</h4>
            <p className="stat-label">Following</p>
          </div>
          <div className="stat-item">
            <h4 className="stat-count">{user.posts}</h4>
            <p className="stat-label">Posts</p>
          </div>
        </div>
        <div className="profile-details mb-4">
          <h4>Account Details</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Contact Options:</strong> {user.contactOptions}</li>
            <li className="list-group-item"><strong>Links:</strong> {user.links}</li>
            <li className="list-group-item"><strong>Account Reached:</strong> <span>{user.accountReached}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
</svg></span> </li>
            <li className="list-group-item"><strong>Account Engaged:</strong> <span>{user.accountEngaged}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg></span></li>
            <li className="list-group-item"><strong>Content Shared:</strong> <span> {user.contentShared} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg></span></li>
            <li className="list-group-item"><strong>Ads Run:</strong> {user.adsRun}</li>
            <li className="list-group-item"><strong>Active Promotions:</strong> {user.activePromotions}</li>
            <li className="list-group-item"><strong>Total Stories:</strong> {user.totalStories}</li>
            <li className="list-group-item"><strong>Total Follows:</strong> <span> {user.totalFollows}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg></span></li>
            <li className="list-group-item"><strong>Total Posts:</strong> {user.totalPosts}</li>
            <li className="list-group-item"><strong>Total Saves:</strong><span> {user.totalSaves}</span></li>
            <li className="list-group-item"><strong>Total Comments:</strong> {user.totalComments}</li>
            <li className="list-group-item"><strong>Total Shares:</strong> {user.totalShares}</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default UserDetails;

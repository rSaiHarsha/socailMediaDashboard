import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../assets/css/UserForm.css'; // Import custom CSS

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    category: '',
    bio: '',
    contactOptions: '',
    links: '',
    followers: 0,
    following: 0,
    posts: 0,
    accountReached: 0,
    accountEngaged: 0,
    contentShared: 0,
    adsRun: 0,
    activePromotions: 0,
    totalStories: 0,
    totalFollows: 0,
    totalPosts: 0,
    totalSaves: 0,
    totalComments: 0,
    totalShares: 0
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`/api/users/${id}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the user!', error);
          setAlert({ type: 'error', message: 'Failed to fetch user data.' });
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (id) {
      axios.put(`/api/users/${id}`, user)
        .then(() => {
          setAlert({ type: 'success', message: 'User updated successfully!' });
          navigate('/user/'+id);
        })
        .catch(error => {
          console.error('There was an error updating the user!', error);
          setAlert({ type: 'error', message: 'Failed to update user.' });
        })
        .finally(() => setLoading(false));
    } else {
      axios.post('/api/users', user)
        .then(() => {
          setAlert({ type: 'success', message: 'User created successfully!' });
          navigate('/');
        })
        .catch(error => {
          console.error('There was an error creating the user!', error);
          setAlert({ type: 'error', message: 'Failed to create user.' });
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="form-container">
      <div className="form-card shadow-lg p-4 rounded">
        <h2 className="form-title">{id ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <i className="bi bi-person-circle form-icon"></i>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">
              <i className="bi bi-tag form-icon"></i>
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={user.category}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio" className="form-label">
              <i className="bi bi-pencil form-icon"></i>
              Bio:
            </label>
            <textarea
              id="bio"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactOptions" className="form-label">
              <i className="bi bi-envelope form-icon"></i>
              Contact Options:
            </label>
            <input
              type="text"
              id="contactOptions"
              name="contactOptions"
              value={user.contactOptions}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="links" className="form-label">
              <i className="bi bi-link form-icon"></i>
              Links:
            </label>
            <input
              type="text"
              id="links"
              name="links"
              value={user.links}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form2-container">
            <div className="form2-card">
              <div className="form2-grid">
                <div className="form2-group">
                  <label htmlFor="followers" className="form2-label">
                    <i className="bi bi-people form2-icon"></i>
                    Followers:
                  </label>
                  <input
                    type="number"
                    id="followers"
                    name="followers"
                    value={user.followers}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="following" className="form2-label">
                    <i className="bi bi-person-plus form2-icon"></i>
                    Following:
                  </label>
                  <input
                    type="number"
                    id="following"
                    name="following"
                    value={user.following}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="posts" className="form2-label">
                    <i className="bi bi-file-earmark-post form2-icon"></i>
                    Posts:
                  </label>
                  <input
                    type="number"
                    id="posts"
                    name="posts"
                    value={user.posts}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="accountReached" className="form2-label">
                    <i className="bi bi-bar-chart form2-icon"></i>
                    Account Reached:
                  </label>
                  <input
                    type="number"
                    id="accountReached"
                    name="accountReached"
                    value={user.accountReached}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="accountEngaged" className="form2-label">
                    <i className="bi bi-bar-chart-line form2-icon"></i>
                    Account Engaged:
                  </label>
                  <input
                    type="number"
                    id="accountEngaged"
                    name="accountEngaged"
                    value={user.accountEngaged}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="contentShared" className="form2-label">
                    <i className="bi bi-share form2-icon"></i>
                    Content Shared:
                  </label>
                  <input
                    type="number"
                    id="contentShared"
                    name="contentShared"
                    value={user.contentShared}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="adsRun" className="form2-label">
                    <i className="bi bi-megaphone form2-icon"></i>
                    Ads Run:
                  </label>
                  <input
                    type="number"
                    id="adsRun"
                    name="adsRun"
                    value={user.adsRun}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="activePromotions" className="form2-label">
                    <i className="bi bi-flag form2-icon"></i>
                    Active Promotions:
                  </label>
                  <input
                    type="number"
                    id="activePromotions"
                    name="activePromotions"
                    value={user.activePromotions}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="totalStories" className="form2-label">
                    <i className="bi bi-file-earmark-text form2-icon"></i>
                    Total Stories:
                  </label>
                  <input
                    type="number"
                    id="totalStories"
                    name="totalStories"
                    value={user.totalStories}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="totalFollows" className="form2-label">
                    <i className="bi bi-person-check form2-icon"></i>
                    Total Follows:
                  </label>
                  <input
                    type="number"
                    id="totalFollows"
                    name="totalFollows"
                    value={user.totalFollows}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="totalPosts" className="form2-label">
                    <i className="bi bi-file-earmark-post form2-icon"></i>
                    Total Posts:
                  </label>
                  <input
                    type="number"
                    id="totalPosts"
                    name="totalPosts"
                    value={user.totalPosts}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="totalSaves" className="form2-label">
                    <i className="bi bi-save form2-icon"></i>
                    Total Saves:
                  </label>
                  <input
                    type="number"
                    id="totalSaves"
                    name="totalSaves"
                    value={user.totalSaves}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="totalComments" className="form2-label">
                    <i className="bi bi-chat-dots form2-icon"></i>
                    Total Comments:
                  </label>
                  <input
                    type="number"
                    id="totalComments"
                    name="totalComments"
                    value={user.totalComments}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
                <div className="form2-group">
                  <label htmlFor="totalShares" className="form2-label">
                    <i className="bi bi-share form2-icon"></i>
                    Total Shares:
                  </label>
                  <input
                    type="number"
                    id="totalShares"
                    name="totalShares"
                    value={user.totalShares}
                    onChange={handleChange}
                    required
                    className="form2-input"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="form-button">
            {loading ? <i className="bi bi-arrow-repeat form-button-icon"></i> : (id ? 'Update' : 'Create')}
            {loading ? ' Saving...' : ''}
          </button>
        </form>

        {alert.message && (
          <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;

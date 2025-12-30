import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import './SignIn.css'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification')
      return
    }

    // Store user data in localStorage
    const userData = {
      email,
      password,
      recaptchaToken,
      timestamp: new Date().toISOString()
    }

    // Get existing users or create new array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    existingUsers.push(userData)
    localStorage.setItem('users', JSON.stringify(existingUsers))

    // Navigate to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group recaptcha-group">
            <ReCAPTCHA
              sitekey="6LfW1DosAAAAAM97lH6CfrI1tCQGRbSwMtjPmbfu"
              onChange={handleRecaptchaChange}
              theme="light"
            />
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn


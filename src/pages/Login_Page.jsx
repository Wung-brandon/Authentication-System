import React from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })
  const [showPassword, setShowPassword] = useState(false);

  const {loginUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const email = e.target.email.value
    // const password = e.target.password.value
    if (formData.email.length > 0){
      loginUser(formData.email, formData.password)
      setFormData({
            email : "",
            password : ""
      })
      console.log(formData.email, formData.password)
    }
  }


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <section className="vh-100" style={{backgroundColor:"#9a616d"}}>
        <div className="container py-5 h-100 w-50">
          <div className="d-flex justify-content-center flex-column align-items-center shadow rounded bg-light">
            <h2 className="mb-4 text-center pt-4" style={{color:"#9a616d"}}>Login</h2>
            <Form onSubmit={handleSubmit} className="p-4">
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <FormControl
                size="lg"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
              />
              <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </Button>
            </InputGroup>
          </Form.Group>

          <Button style={{backgroundColor:"#9a616d", borderColor:"#9a616d"}} type="submit" className="w-100 mt-3">
            Login
          </Button>
          <div className='mt-2'>
            <p className='text-center pt-3'>Don't have an account? <Link to="/register" style={{color:"#9a616d"}}>Sign Up</Link></p>
          </div>
        </Form>


          </div>

        </div>

      </section>
    </div>
  )
}

export default LoginPage
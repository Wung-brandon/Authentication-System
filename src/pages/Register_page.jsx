import React from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Registerpage() {

  const [formData, setFormData] = useState({
    email : "",
    username : "",
    password : "",
    confirm_password : ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {registerUser} = useContext(AuthContext)

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (formData.email.length > 0){
      if (formData.password === formData.confirm_password){
        registerUser(formData.email, formData.username, formData.password, formData.confirm_password)
        setFormData({
          email : "",
          username : "",
          password : "",
          confirm_password : ""
        })
        console.log(formData.email, formData.username, formData.password, formData.confirm_password)
      }
      else{
        alert("Password does not match")
      }
    }
    else{
      alert("something went wrong")
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <section className="vh-100" style={{backgroundColor:"#9a616d"}}>
        <div className="container py-5 h-100 w-50">
          <div className="d-flex justify-content-center flex-column align-items-center shadow rounded bg-light">
            <h2 className="mb-4 text-center pt-4" style={{color:"#9a616d"}}>Register User</h2>
            <Form onSubmit={handleRegisterSubmit} className="p-4">
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

          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              name="username"
              value={formData.username}
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

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
              <FormControl
                size="lg"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
                placeholder="Enter password"
            />
              <Button variant="outline-secondary" onClick={toggleConfirmPasswordVisibility}>
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </Button>
            </InputGroup>
          </Form.Group>

          <Button style={{backgroundColor:"#9a616d", borderColor:"#9a616d"}} type="submit" className="w-100 mt-3">
            Register
          </Button>
          <div className='mt-2'>
            <p className='text-center pt-3'>Already have an account? <Link to="/login" style={{color:"#9a616d"}}>Login</Link></p>
          </div>
        </Form>


          </div>

        </div>

      </section>
    </div>
  )
}

export default Registerpage
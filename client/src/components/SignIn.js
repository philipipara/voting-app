import React, { useState } from 'react';
import {Form, Button, Label, Input, FormGroup} from "reactstrap";
import Card from 'react-bootstrap/Card'
import {isAuthenticated, signin, authenticate} from "./helper";
import "./Signin.css";
import Menu from './Menu';
import { Redirect } from "react-router-dom";





const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  



  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values });
    signin({ email, password })
      .then(data => {
        
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/" />
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {

    return(
      <div className="piece">
    <Card bg="danger"border="primary" style={{ width: '30rem', color: "white" }}>
        <Card.Header>Welcome Voters</Card.Header>
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>Sign in here to cast your Vote!</Card.Title>
          <Card.Text>
          <Form>
           <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input 
           
             type="email" 
            value={email}
            onChange={handleChange("email")}
             
             
           placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input 
          type="password" 
          value={password}
          onChange={handleChange("password")}
          placeholder="Enter password" />
        </FormGroup>
        <Button 
          onClick={onSubmit}
          style={{color: "blue", backgroundColor: "white"}}
          >Login
        </Button>
        <Button 
          className="ml-2" 
          style={{color: "red", backgroundColor: "white"}}
          href="/signup">
          Haven't Signed Up?
          </Button>
       </Form>
          </Card.Text>
        </Card.Body>
      </Card>
        
      </div>
    );
  };
   

   return(
     <div>
       <Menu />
       {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      </div>
     
   );
    
}


export default Login;
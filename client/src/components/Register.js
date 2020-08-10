import React, {useState} from "react";
import {Form, Button, Label, Input, FormGroup} from "reactstrap";
import Card from 'react-bootstrap/Card'

import {signup} from "./helper"
import "./Signin.css";
import Menu from './Menu';




const Register = () => {

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        social: "",
        email: "",
        password: ""
    });

    const {name, lastName, social, email, password} = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
        setValues({ ...values });
        signup({ name, lastName, social, email, password })
          .then(data => {
    
              setValues({
                ...values,
                name: "",
                lastName: "",
                social: "",
                email: "",
                password: ""
              });
            
          })
          .catch(console.log("Error in signup"));
      }; 




    return(
        <div>
        <Menu />
     <div className="register">
     <Card bg="danger"border="primary" style={{ width: '30rem', color: "white" }}>
         <Card.Header>Welcome Voters</Card.Header>
         <Card.Body>
           <Card.Title style={{textAlign: "center"}}>Register here to cast your Vote!</Card.Title>
           <Card.Text>
           <Form>
           <FormGroup>
             <Label>First Name</Label>
             <Input 
            
              type="text" 
              value={name}
              onChange={handleChange("name")}
              id="exampleEmail" 
            placeholder="Enter your First Name" />
        </FormGroup>    
         <FormGroup>
             <Label>Last Name</Label>
             <Input 
              type="text" 
              value={lastName}
              onChange={handleChange("lastName")}
            placeholder="Enter your email" />
       </FormGroup>
       <FormGroup>
             <Label>Social Security Number</Label>
             <Input 
              onChange={handleChange("social")}
              type="number" 
              value={social}
            placeholder="Enter your Social" />
       </FormGroup>
            <FormGroup>
             <Label>Email</Label>
             <Input 
              onChange={handleChange("email")}
              type="email" 
              value={email}
            placeholder="Enter your email" />
       </FormGroup>
       <FormGroup>
         <Label for="examplePassword">Password</Label>
         <Input 
           onChange={handleChange("password")}
           type="password" 
           value={password}
           placeholder="Enter password" />
         </FormGroup>
         <Button onClick={handleSubmit} style={{color: "blue", backgroundColor: "white"}}>Submit</Button>
      
        </Form>
           </Card.Text>
         </Card.Body>
       </Card>
         
       </div>
       </div>
    );
}

export default Register;
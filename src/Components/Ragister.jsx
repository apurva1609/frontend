 import React, {useState}from "react";
 import { Container, Row, Col, Card, Form, Button} from "react-bootstrap";
 import axios from "axios";
 const Ragister = () => {

  const [fname, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  
  function handleSubmit(e) {
        e.preventDefault()

        // const newData = new FormData()
        // newData.append('fname', name)
        // newData.append('email', email)
        // newData.append('password', password)
        // newData.append('mobile', mobile)
        // newData.append('address', address)git

        const userData={
           fname,
           email,
           password,
           mobile,
           address
        }
        
        
    
        axios.post('http://localhost:8000/registered', userData)
          .then(res => {
            console.log("hi",res.data);
            // setUserData(res.data.userdata)
            alert('Data Add Successfully!');
            setName("")
        setEmail("")
        setPassword("")
        setMobile("")
        setAddress("")
          })
          .catch(err => {
            console.log(err);
          })
        
        
      }
   return (
     <>
       <Container className="d-flex justify-content-center">
           <Col md={10}>
             <div className="border-top border-5 mt-5 border-primary"></div>
             <Card className="">
               <Card.Body>
                 <h1 className="text-center text-dark pt-3">REGITRATION FORM</h1>
                 <p className="pb-3">Please enter your details to join us ! </p>
                 <Form onSubmit={handleSubmit}>
                 <Row className="pb-4">
                   <Col md={4}>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter Name" value={fname} required 
                     onChange={(e) => setName(e.target.value)} />
                   </Col>
                   <Col md={4}>
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" placeholder="Enter Email" value={email} required 
                     onChange={(e) => setEmail(e.target.value)} />
                   </Col>
                   <Col md={4}>
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="text" placeholder="Enter Password" value={password} required 
                     onChange={(e) => setPassword(e.target.value)}/>
                   </Col>
                 </Row>
                 <Row className="pb-4">
                   <Col md={4}>
                     <Form.Label>Mobile</Form.Label>
                     <Form.Control type="text" placeholder="Enter Mobile" value={mobile} required 
                     onChange={(e) => setMobile(e.target.value)}/>
                   </Col>
                   <Col md={8}>
                     <Form.Label>Address</Form.Label>
                     <Form.Control type="text" as="textarea" rows={1} placeholder="Enter Address" value={address} required
                     onChange={(e) => setAddress(e.target.value)} />
                   </Col>
                   {/* <Col md={4}>
                     <Form.Label>City</Form.Label>
                     <Form.Select aria-label="Default select example">
                         <option>-Select City-</option>
                         <option >Pune</option>
                         <option >Nashik</option>
                         <option >Nandurbar</option>
                     </Form.Select>
                   </Col> */}
                 </Row>
                 {/* <Row className="pb-4">
                     <Col md={4} className="d-flex"  >
                     <Form.Label>Gender</Form.Label>
                     <Form.Check type="radio" name="gender" className="ps-3" /><Form.Label>Male</Form.Label>
                     <Form.Check type="radio" name="gender" className="ps-3"/><Form.Label>Female</Form.Label> 
                     </Col>
                     <Col md={4} className="d-flex" >
                     <Form.Label>Subject</Form.Label>
                     <Form.Check className="ps-3"/><Form.Label>HTML</Form.Label>
                     <Form.Check className="ps-3" /><Form.Label>CSS</Form.Label> 
                     </Col>
                     <Col md={4}>
                     <Form.Label>Image</Form.Label>
                     <Form.Control type="file" placeholder="Enter Mobile" />
                     </Col>
                 </Row> */}
                 <Button type="submit" className="w-100">Submit</Button>
                 </Form>
               </Card.Body>
             </Card>
           </Col>
       </Container>
     </>
   );
 };
 export default Ragister;

// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import { Card } from 'react-bootstrap';
// import axios from "axios";

// const Register = () => {

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
  
//   function handleSubmit(e) {
//     e.preventDefault()
//     const newData = new FormData()
//     newData.append('name', name)
//     newData.append('email', email)
//     newData.append('password', password)
    

//     axios.post('http://localhost:8000/register', newData)
//       .then(res => {
//         console.log(res.data);
//         alert('Data Add Successfully!');
//       })
//       .catch(err => {
//         console.log(err);
//       })
//     setName("")
//     setEmail("")
//     setPassword("")
    
//   }
//   return (
//     <Container>
//       <Row className="vh-100 d-flex justify-content-center align-items-center">
//         <Col md={10} lg={8} xs={12}>
//           <div className="border border-3 border-primary"></div>
//           <Card className="shadow">
//             <Card.Body>
//               <div className="mb-3 mt-4">
//                 <h2 className="fw-bold mb-2 text-uppercase">Registration Form</h2>
//                 <p className=" mb-5">Please enter your details to join us!</p>
//                 <Form onSubmit={handleSubmit}>
//                   <Row className="mb-3">
//                     <Form.Group
//                       as={Col}
//                       className="mb-3"
//                       controlId="Name"
//                     >
//                       <Form.Label className="text-center">
//                         Name
//                       </Form.Label>
//                       <Form.Control type="text" placeholder="Enter Name" value={name} required
//                         onChange={(e) => setName(e.target.value)} />
//                     </Form.Group>

//                     <Form.Group
//                       as={Col}
//                       className="mb-3"
//                       controlId="Email"
//                     >
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         placeholder="Enter Email" required
//                         onChange={(e) => setEmail(e.target.value)} value={email}
//                       />
//                     </Form.Group>

//                     <Form.Group
//                       as={Col}
//                       className="mb-3"
//                       controlId="password"
//                     >
//                       <Form.Label className="text-center">
//                         Password
//                       </Form.Label>
//                       <Form.Control type="password" placeholder="Enter Password." required
//                         onChange={(e) => setPassword(e.target.value)} value={password} />
//                     </Form.Group>
//                   </Row>
//                                     <div className="d-grid">
//                     <Button variant="primary" type="submit">
//                       Submit
//                     </Button>
//                   </div>
//                 </Form>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default Register
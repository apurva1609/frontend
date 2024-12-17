import React from "react";
import { Container, Row, Col, Card, Form, Button} from "react-bootstrap";

const Ragister = () => {
  
  return (
    <>
      <Container className="d-flex justify-content-center">
          <Col md={10}>
            <div className="border-top border-5 mt-5 border-primary"></div>
            <Card className="">
              <Card.Body>
                <h1 className="text-center text-dark pt-3">REGITRATION FORM</h1>
                <p className="pb-3">Please enter your details to join us ! </p>
                <Row className="pb-4">
                  <Col md={4}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter Password" />
                  </Col>
                </Row>
                <Row className="pb-4">
                  <Col md={4}>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile" />
                  </Col>
                  <Col md={8}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" as="textarea" rows={1} placeholder="Enter Address" />
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
                <Button className="w-100">Submit</Button>
              </Card.Body>
            </Card>
          </Col>
      </Container>
    </>
  );
};

export default Ragister;

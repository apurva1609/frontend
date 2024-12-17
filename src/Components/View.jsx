import React, { useEffect, useState, } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'


const View = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    showUsers()
  }, [])

  const showUsers = () => {
    axios.get('http://localhost:8000/user')
      .then(res => {
        console.log(res.userData.data)
        setUserData(res.userData.data)
      }).catch(err => {
        console.log(err);
      })
  }

 
  return (
    <Container>
      <Row style={{ paddingTop: 100 }} className="d-flex justify-content-center align-items-center">
      <Col md={10} lg={12} xs={12}>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>fname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((Register, id) =>  {
                return (
                  <tr key={id} >
                    <td>{id + 1}</td>
                    <td>{Register.fname}</td>
                    <td>{Register.email}</td>
                    <td>{Register.Password} </td>
                    <td>{Register.Mobile} </td>
                    <td>{Register.Address} </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
   
      </Row>
    </Container>
  )
}

export default View

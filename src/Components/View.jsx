import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

const View = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Table striped bordered className='mt-5'>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Gender</th>
                  <th>Subject</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody> */}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default View;

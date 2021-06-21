import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddDepModal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // alert(event.target.DepartmentId.value);
    fetch("http://13.233.21.154/reactcrudapi/api/Department", {
      method: "post",
      headers: {
        'Accept': "application/json",
        'ContentType': "application/json",
      },
      body: JSON.stringify({
        DepartmentId: event.target.DepartmentId.value,
        DepartmentName: event.target.DepartmentName.value,
        
      }),
     
    })
    
      .then((res) => res.json())
     
      .then((results) => {
        // this.setState({result})
        console.log(results);
        //alert(results);
      });
  };

  render() {
    return (
      <div>
        <Modal {...this.props}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="DepartmentId">
                    <Form.Label>DepartmentId</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentId"
                      placeholder="DepartmentId"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="DepartmentName">
                    <Form.Label>DepartmentName</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentName"
                      placeholder="DepartmentName"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      {" "}
                      Add Department
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

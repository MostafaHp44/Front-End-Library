import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';


function DeleteUser() {
  return (
    <Form>
     <Row>
      
        <Col>
            <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
        </Col>
          <Col>
            <InputGroup className="mb-2">
            <InputGroup.Text> ID.. </InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="ID" />
          </InputGroup>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      
      </Row>

     

      <Row className="mb-3">
        

     

       
         
      </Row>

     

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DeleteUser;
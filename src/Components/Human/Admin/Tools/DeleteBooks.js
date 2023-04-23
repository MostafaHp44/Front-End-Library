import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const DeleteBook = () => {
    return (
    <React.Fragment>
      <Form>
   

      
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>ID_Book</Form.Label>
        <Form.Control placeholder="ID_Book" />
      </Form.Group>

     

      <Row className="mb-3">
       

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>MainCategory</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option> EBook </option>
            <option> MagaZine </option>
            <option> Document </option>
            <option> Sheet's </option>
            <option> Audio-Books </option>


          </Form.Select>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Format</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option> Digital </option>
            <option> PaperBack </option>


          </Form.Select>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Cateegory</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option> Action & Adventure Fiction Books </option>
            <option> Art Books </option>
            <option> Biography & Memoir Books </option>
            <option> Business Books </option>
            <option> Career & Growth Books </option>
            <option> Childrens Books </option>
            <option> Classics Books </option>
            <option> Comics & Graphic Novels Books </option>

          </Form.Select>
        </Form.Group>

      
      </Row>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </React.Fragment>
    );
}
 
export default DeleteBook;
import { Link } from "react-router-dom";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";

const TransactionPage = () => {
  return (
    <>
      <Card className="mainMenu">
        <Card.Body>
          <h1>Make a Transaction</h1>

          <Form>
            <Form.Select>
              <option>Choose an action</option>
              <option value="1">Deposit</option>
              <option value="2">Widthdraw</option>
            </Form.Select>
            <br></br>
            <br></br>
            <FloatingLabel label="Amount" className="mb-3">
              <Form.Control as="textarea" placeholder="Amount" />
            </FloatingLabel>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <p> </p>
              <Link to="/home">
                <Button variant="primary">Submit</Button>
              </Link>
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}

              <br></br>
              <br></br>
              <Link to="/home">
                <a>Cancel</a>
              </Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default TransactionPage;

import { Link } from "react-router-dom";
import { Card, Form, Button, FloatingLabel, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const MainMenuPage = () => {
  const [info, setMainPageInfo] = useState([]);
  useEffect(() => {
    const fetchMainPageInfo = async () => {
      try {
        const response = await fetch("/user/user_transactions");
        if (response.ok) {
          const data = await response.json();
          setMainPageInfo(data);
        } else {
          throw new Error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchMainPageInfo();
  }, []);
  return (
    <>
      <Card className="mainMenu">
        <Card.Header>
          <Card.Title>Welcome {info.first_name} {info.last_name}</Card.Title>
        </Card.Header>

        <Card.Body>
        <Link to="/">
            <a>Logout</a>
        </Link>
        <Link to="/transactions">
            <a>Make a Withdrawl or Deposit</a>
        </Link>
          <h3>Recent Transactions</h3>
          <h1>$ {info.balance}</h1>
          <h3>Total Balance</h3>


          <ListGroup>
              {info.user_transactions.map((transaction_data,index) => (
                <ListGroup.Item key = {index}>
                  <h3>{transaction_data.transaction_type}</h3>
                  <p>{transaction_data.transaction_amount}</p>
                </ListGroup.Item>
              ))}
            
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainMenuPage;

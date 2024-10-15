import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const Homepage = () => {
  const [info, setHomePageInfo] = useState([]);
  useEffect(() => {
    const fetchHomePageInfo = async () => {
      try {
        const response = await fetch("/main/home_info");
        if (response.ok) {
          const data = await response.json();
          setHomePageInfo(data);
        } else {
          throw new Error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchHomePageInfo();
  }, []);
    return (
      <div className="content">
        <div>
          <h1>Welcome to the 675 Bank</h1>
          <h2>Banking, reinvigorated.</h2>
        </div>
        <br></br>
        <div>
          <p>Serving { info.users } customers since 2004.</p>
          <p>Protecting $ { info.balance } worth of assets.</p>
          <br></br>
          <br></br>
          <Link to="/Login">
            <Button variant="primary">Customer Login</Button>
          </Link>
        </div>
      </div>
    );
}
 
export default Homepage;
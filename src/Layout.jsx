import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
  return (
    <>
       <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/page1">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/page2">Page 2</Nav.Link>
      </Nav.Item>
     
    </Nav>
      

      <Outlet />
    </>
  )
};

export default Layout;
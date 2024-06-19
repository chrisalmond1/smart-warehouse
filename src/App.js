import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Employees from './components/Employees';
import ItemDetail from './components/ItemDetail';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => setShowSidebar(!showSidebar);
  
  return (
    <Router basename="/smart-warehouse">
      <div>
        <Navbar bg="light" expand="lg" className="mb-3">
          <Button variant="primary" onClick={handleShowSidebar} className="d-lg-none">
            ☰
          </Button>
          <Link className="nav-link" to="/">
            <Navbar.Brand Link="/">Warehouse Management</Navbar.Brand>
          </Link>
          
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto d-none d-lg-flex">
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
              <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <Offcanvas show={showSidebar} onHide={handleShowSidebar} className="d-lg-none">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/" onClick={handleShowSidebar}>Dashboard</Nav.Link>
                  <Nav.Link as={Link} to="/inventory" onClick={handleShowSidebar}>Inventory</Nav.Link>
                  <Nav.Link as={Link} to="/employees" onClick={handleShowSidebar}>Employees</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
            <nav className="col-md-2 d-none d-lg-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/inventory">
                      Inventory
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/employees">
                      Employees
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/inventory/:itemId" element={<ItemDetail />} />
                <Route path="/employees/:employeeId" element={<EmployeeDetail />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
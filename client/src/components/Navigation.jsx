import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './Home';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
const Navigation = () => {
  return (
    <Router>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <Link className='nav-link' to='/'>
            Parlar
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavItem>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/Profile'>
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/Register'>
                Sign Up
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/Login'>
                Login
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/Profile'>
          <Profile id={1} />
        </Route>
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Login' component={Login} />
      </Switch>
    </Router>
  );
};

export default Navigation;
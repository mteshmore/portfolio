import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

import Docs from './Documents';
import Home from './Home';
import Designs from './Designs';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className='nav-wrapper' dark expand="lg"style={{outerHeight:"100px"}}>
                <NavbarBrand className = "title" href = "/">Esha More</NavbarBrand>
                 <Link className = "links" to="/Designs">Designs</Link>
                 <Link className = "links" to="/Docs">Documents</Link>
          </Navbar>
            <Route exact path = "/" component = { Home } />
            <Route path = "/Docs" component = { Docs } />
            <Route path = "/Designs" component = { Designs } />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home'

function Navbar() {
    return (
      <Router>
        <div className="navbar-div">
          <nav className="menu">
            <ul className="main-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about us">About Us</Link>
              </li>
              <li>
                <Link to="/contact us">Contact Us</Link>
              </li>
              <li>
                <Link to="/blogs">News/Blogs</Link>
              </li>
              <li className="with-submenu">
                <Link to="/register">
                  Register&nbsp;
                  <ion-icon
                    className="icon-brand"
                    name="chevron-down-outline"
                  ></ion-icon>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="#">Sub Sub Item 1</Link>
                  </li>
                  <li>
                    <Link href="#">Sub Sub Item 2</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="donation">
              <Link className="donation-btn" href="#">DONATION</Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="about us/">
              About Us
            </Route>
            <Route exact path="/contact us">
              Contact us
            </Route>
            <Route exact path="/blogs">
              Blogs
            </Route>
            <Route exact path="/register">
              Register
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Navbar

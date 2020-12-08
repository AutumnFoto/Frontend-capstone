import React, { useState } from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function MyNavbar(props) {
  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };
  const { user } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color='dark' dark expand='md' className='justify-content-between'>
        <Link className="navbar-brand" to='/'>Atlas Reign</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
          <NavItem>
              <Link className="nav-link" to='/home'>
                Home
              </Link>
              </NavItem>
            <NavItem>
              <Link className="nav-link" to='/profile'>Profile</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/articles'>
                Articles
              </Link>
            </NavItem>
          </Nav>
          {/* "Optional chaining operator: (?.)" gives the prop time to load without throwing errors. Only use this if you know your props are correct and need time to load. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
          {
            user
            && <>
              <img className="userInfo" src={user?.photoURL} alt={user?.displayName} />
              <UncontrolledDropdown>
              <DropdownToggle nav caret>
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                {user?.displayName}
                </DropdownItem>
                <DropdownItem>
                  <div
                    className='nav-link btn btn-danger'
                    onClick={(e) => logMeOut(e)}
                  >
                    Logout
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

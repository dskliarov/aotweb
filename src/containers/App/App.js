import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';

function fetchData(getState, dispatch) {
  const promises = [];
  if (!isInfoLoaded(getState())) {
    promises.push(dispatch(loadInfo()));
  }
  if (!isAuthLoaded(getState())) {
    promises.push(dispatch(loadAuth()));
  }
  return Promise.all(promises);
}

@connectData(fetchData)
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(null, '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState(null, '/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <div className={styles.navbarWrapper}>
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                                <div className={styles.brand}/>
                                <span className={styles.brand_company}>{config.app.title}</span>
                            </IndexLink>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>

                    <Navbar.Collapse eventKey={0}>
                        <Nav navbar>
                            {user && <LinkContainer to="/chat">
                                <NavItem eventKey={1}>Chat</NavItem>
                            </LinkContainer>}

                            <LinkContainer to="/">
                                <NavItem eventKey={1}>Home</NavItem>
                            </LinkContainer>
                            <NavDropdown enentKey={2} title="Products" id="products-nav-dropdown">
                                <MenuItem eventKey={2.1} href="products#platform">Fourzero™ Platform</MenuItem>
                                <MenuItem eventKey={2.2} href="products#runtime">Fourzero™ Runtime</MenuItem>
                                <MenuItem eventKey={2.3} href="products#studio">Fourzero™ Studio</MenuItem>
                                <MenuItem eventKey={2.4} href="products#licensing">Licensing</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.5}>FAQ</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={3} title="Services" id="service-nav-dropdown">
                                <MenuItem eventKey={3.1} href="services">Quick-start program</MenuItem>
                                <MenuItem eventKey={3.2}>Customization services</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Training</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={4} title="Solutions" id="tutorials-nav-dropdown">
                                <MenuItem eventKey={4.1}>Programmable automation controls</MenuItem>
                                <MenuItem eventKey={4.2}>Embedded controls</MenuItem>
                                <MenuItem eventKey={4.3}>PC-based control</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={7} title="Company" id="company-nav-dropdown">
                                <MenuItem eventKey={7.1} href="about">About</MenuItem>
                                <MenuItem eventKey={7.2} href="leadership">Leadership</MenuItem>
                                <MenuItem eventKey={7.3}>Support(US and EU)</MenuItem>
                                <MenuItem eventKey={7.4} href="contactus">Contact us</MenuItem>
                                <NavItem enentKey={6} href="careers">Careers</NavItem>
                            </NavDropdown>
                        </Nav>
                        {user &&
                        <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        {this.props.children}
        <div className="container">
        <footer className={styles.footer}>
                    <p className="pull-right"><a href="#">Back to top</a></p>
        <p>© 2016 AoT, LLC. </p>
      </footer>
       </div>
    </div>
);
  }
}

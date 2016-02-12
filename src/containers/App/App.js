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
            <div className={styles.container}>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                                <div className={styles.brand}/>
                                <span>{config.app.title}</span>
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
                                <MenuItem eventKey={2.1}>Fourzero Platform</MenuItem>
                                <MenuItem eventKey={2.2}>Benefits</MenuItem>
                                <MenuItem eventKey={2.3}>Licensing</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.4}>FAQ</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={3} title="Services" id="service-nav-dropdown">
                                <MenuItem eventKey={3.1}>Full Service</MenuItem>
                                <MenuItem eventKey={3.2}>Co-Development</MenuItem>
                                <MenuItem eventKey={3.3}>Partnership</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.4}>Training</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={4} title="Uses" id="uses-nav-dropdown">
                                <MenuItem eventKey={4.1}>Case Studies</MenuItem>
                                <MenuItem eventKey={4.2}>Use Cases</MenuItem>
                                <MenuItem eventKey={4.3}>Projects</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={5} title="Tutorials" id="tutorials-nav-dropdown">
                                <MenuItem eventKey={5.1}>How to?</MenuItem>
                                <MenuItem eventKey={5.2}>Videos</MenuItem>
                                <MenuItem eventKey={5.3}>Examples</MenuItem>
                                <MenuItem eventKey={5.4}>Knowledge Base</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavDropdown enentKey={6} title="Careers" id="careers-nav-dropdown">
                                <MenuItem eventKey={6.1}>Work Environment</MenuItem>
                                <MenuItem eventKey={6.2}>Compensaion & Benefits</MenuItem>
                                <MenuItem eventKey={6.3}>Jobs</MenuItem>
                                <MenuItem eventKey={6.4}>Internship</MenuItem>
                            </NavDropdown>
                            <NavDropdown enentKey={7} title="Company" id="company-nav-dropdown">
                                <MenuItem eventKey={7.1}>About</MenuItem>
                                <MenuItem eventKey={7.2}>History</MenuItem>
                                <MenuItem eventKey={7.3}>Support(US and EU)</MenuItem>
                                <MenuItem eventKey={7.4}>Contact us</MenuItem>
                                <MenuItem eventKey={7.5}>Investor Relations</MenuItem>
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
        <p>© 2016 AoT, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
       </div>
    </div>
);
  }
}

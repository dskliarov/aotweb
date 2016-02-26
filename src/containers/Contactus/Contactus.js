import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Contactus extends Component {

  render() {
    const styles = require('./Contactus.scss');
    return (
        <div className={styles.contactus}>
            <div className="jumbotron">
                <div className="container">
                    <h1>Contact Us</h1>
                    <Helmet title="Contact Us"/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 blog-main">
                       <div>
                            <address>
                                <strong>US Address:</strong>
                                <br/>
                                6633 18 Mile Road, 3E<br/>
                                Sterling Heights, MI 48314<br/>
                                <br/><br/>
                                <strong>Phone:</strong>
                                &nbsp;
                                +1 (248) 255-4540<br/>
                                <strong>Email:</strong>
                                &nbsp;
                                info@automationofthings.com
                            </address>
                        </div>
                    </div>
                    <div className="col-sm-4 blog-main">
                        <div>
                            <address>
                                <strong>US Sales:</strong>
                                <br/>
                                <strong>Phone:</strong>
                                &nbsp;
                                +1 (248) 805-4941<br/>
                                <strong>Email:</strong>
                                &nbsp;
                                sales_us@automationofthings.com
                            </address>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-4 blog-main">
                        <div>
                            <address>
                                <strong>EU Address:</strong>
                                <br/>
                                6633 18 Mile Road, 3E<br/>
                                Sterling Heights, MI 48314<br/>
                                <br/><br/>
                                <strong>Phone:</strong>
                                &nbsp;
                                +1 (248) 255-4540<br/>
                                <strong>Email:</strong>
                                &nbsp;
                                info@automationofthings.com
                            </address>
                        </div>
                    </div>
                    <div className="col-sm-4 blog-main">
                        <div>
                            <address>
                                <strong>EU Sales:</strong>
                                <br/>
                                <strong>Phone:</strong>
                                &nbsp;
                                +49 (172) 749-5666<br/>
                                <strong>Email:</strong>
                                &nbsp;
                                sales_eu@automationofthings.com
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

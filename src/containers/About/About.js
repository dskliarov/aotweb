import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  render() {
    const styles = require('./About.scss');
    return (
        <div className={styles.about}>
            <div className="jumbotron">
                <div className="container">
                    <h1>About Us</h1>
                    <Helmet title="About Us"/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 blog-main">
                        <div className="blog-post">
                            <blockquote>
                                <p>
                                    <strong>Automation of Things, LLC</strong> is an award winning Michigan-based manufacturer of the FourZero™ software platform.
                                </p>
                            </blockquote>
                            <p>
                                <strong>FourZero™</strong> has been identified as a disruptive technology for
                                creating devices, sensors, products, controls, and
                                automation systems for the ever expanding connected
                                world. We are ‘raising the bar’ in the way automation is
                                applied and the programming of sensors, devices,
                                automation is realized.  Product manufacturers will use this
                                platform to position their products in the IOT, Industrial IOT
                                and cyber physical systems markets
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

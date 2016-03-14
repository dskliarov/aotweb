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
                                    <strong>Automation of Things (AoT)</strong> was founded in 2014 to simplify how the world creates and manages embedded controls and automation systems. As industry begins reaping the benefits of the connected enterprise, increased automation, and more immersive, real time user experiences require connected, intelligent, and distributed systems that are reliable, dependable, secure, and that can be updated after deployment. Control system developers need a development environment that supports agility, flexibility, and efficiency. Today, designers are limited to using software tools that are akin to those used before the advent of object-oriented programming
                                </p>
                            </blockquote>
                            <p>
                                In 2016 we introduced our FourZero™ software development platform, built to simplify and accelerate the design, deployment and management of embedded systems, programmable automation controllers, and industrial PC-based controllers.  FourZero gives controls developers a modern, object-oriented way to design software applications that are virtualized instead of hardware dependent. Once deployed, FourZero automatically handles hot-swappable changes to applications across a wide array of devices in order to more easily scale to meet the needs of today’s industrial Internet of Things.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

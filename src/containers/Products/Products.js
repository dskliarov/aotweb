import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./Products.scss');
// require the logo image both from client and server
    return (
    <div className={styles.products}>
        <div className="jumbotron">
            <div className="container">
                <div className="blog-header">
                    <h1>Fourzero Platform</h1>
                    <p className="lead blog-description"><strong>FourZero™</strong> is a software platform to create and support next generation controls, automation and cyber physical systems.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-8 blog-main">
                    <div className="blog-post">
                        <h2 className="blog-post-title">Intoduction</h2>
                        <hr/>
                            <p>
                                <strong>Automation of Things (AoT)</strong> has developed, <strong>FourZero™</strong> platform to enable automation system manufacturers to create smart devices for the connected world of digital manufacturing.  FourZero is a software platform for creating and supporting any controls or automation application that uses embedded systems, programmable automation controllers or industrial PC.  While the platform fully implements the rigorous requirements typical of a real-time control system, it also incorporates many technologies that are widely used by consumer IT industry.  By using this platform, you will be able to take advantage of reusability, interoperability, portability and system level programming.  Use this platform will make your product dependable, secure, reliable, and safe for the age of industrial IOT.
                            </p>
                    </div>
                    <div className="blog-post">
                        <h2 id="platform" className="blog-post-title">FourZero™ Platform</h2>
                        <hr/>
                            <p>
                                <strong>FourZero™</strong> consists of <strong>FourZero™</strong> Studio, FourZero Runtime, Runtime Manager and ecosystem support.  Together they can be used to create embedded systems platforms that execute real-time controls applications and other software applications.  Both virtual and real configurations of a system are possible allowing the developer the ability to design the system virtually, test and validate without hardware or hardware-in-the-loop before deploying into the real system.  The developer can use the ecosystem to reuse objects, components or modules that are open-source, fee based or simply mocked modules in their project, accelerating the product development cycle and innovation.
                            </p>
                    </div>
                    <div className="blog-post">
                        <h2 id="runtime" className="blog-post-title">FourZero™ Runtime</h2>
                        <hr/>
                            <p>
                                The runtime consists of event based real-time application execution engine, publish and subscribe mechanisms, application manager, plug and play mechanisms, hardware and network abstraction interfaces, runtime monitoring, data mapping service, data encryption, feature reporting and set of standard function libraries.  FourZero Studio is used to extend runtime to customize for proprietary hardware or network interface.<br/><br/>

                                FourZero runtime is developed using C++11 standard and as such compatible with many operating systems.  Currently supported operating system include Posix, Windows, VxWorks, eCos and netos which are widely used for embedded systems.  The FourZero runtime runs IEC61499 compliant applications created by tools such as FourZero Studio.
                            </p>
                    </div>
                    <div className="blog-post">
                        <h2 id="studio" className="blog-post-title">FourZero™ Studio</h2>
                        <hr/>
                            <p>
                                <strong>FourZero™</strong> Studio is an integrated development environment for creating applications that run on <strong>FourZero™</strong> Runtime.   The studio allows developer to design the application, customize the runtime or manage an existing system.  Using the studio, a developer creates virtual or real systems.  A controls application is a group of user defined or standard function blocks that run on a system platform.  The developer creates a system or components that include devices, hardware modules, network modules, function blocks and function block networks.  These system configuration section is used to create various configurations virtual, real, functional test and system test.<br/><br/> With studio you may create application with real or virtual system.  Once the application is developed and validated virtually it may be downloaded to the real system devices running FourZero Runtime.  This approach allows you to focus on the complete automation system design right from the beginning and create a truly distributed cooperative system.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

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
                        <h2 className="blog-post-title">Product Intro</h2>
                        <hr/>
                            <blockquote>
                                <p>
                                    <strong>FourZero™</strong> is a software platform to create and support next generation
                                    controls, automation and cyber physical systems.
                                </p>
                            </blockquote>
                            <p>
                                <strong>FourZero™</strong> incorporates ‘state-of-the-art’ automation standards, bridges
                                the widening industrial technology gap and accelerates creation of
                                intelligent devices and automation systems for the new world of
                                connected Smart Factory, Industrial IOT, IOT and Industrie 4.0.
                            </p>
                    </div>
                    <div className="blog-post">
                        <h2 id="benefits" className="blog-post-title">Benefits</h2>
                        <p>This is just filling text</p>
                        <hr/>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <blockquote>
                            <p>
                                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                        </blockquote>
                        <blockquote>
                            <p>
                                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                        </blockquote>
                        <blockquote>
                            <p>
                                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                        </blockquote>
                        <blockquote>
                            <p>
                                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                        </blockquote>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                        </p>
                    </div>
                    <div className="blog-post">
                        <h2 id="licensing" className="blog-post-title">Licensing</h2>
                        <p>This is just filling text</p>
                        <hr/>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <blockquote>
                            <p>
                                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

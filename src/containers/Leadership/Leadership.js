import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Ledership extends Component {

  render() {
    const styles = require('./Leadership.scss');
    return (
        <div className={styles.leadership}>
            <div className="jumbotron">
                <div className="container">
                    <h1>Lidership</h1>
                    <Helmet title="Lidership"/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 blog-main">
                        <div className="blog-post">
                                <p>
                                    <h3><strong>Samir Taylor, President</strong></h3>
                                    <br/>
                                </p>
                                <p>
                                    <div className={'pull-left ' + styles.lider_img}>
                                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" widht="150" height="150"/>
                                    </div>
                                    Samir (Sam) Taylor is the President and CEO of Automation of Things, LLC (AoT). Sam has over 15 years of experience developing and marketing software products in the area of manufacturing automation and industrial control.  Prior to AoT Sam was President and cofounder of WSP Technologies, Inc. (WSP), a provider of high precision spatial position sensor systems and pc-based control systems.  Before WSP, Sam was engineering manager at Stanley Assembly Technologies (SAT), a division of Stanley-Black & Decker, where reengineered product offerings, increasing product margins and improving both manufacturability and product quality.  Sam has extensive experience transforming businesses from idea to profitable reality. He holds a Master’s degree in Computer Science and Engineering from Oakland University and Bachelor’s in Electrical Engineering from Punjab University.
                                </p>
                        </div>
                    </div>
                </div>
                <hr className={styles.featuretteDivider}/>
                <div className="row">
                    <div className="col-sm-8 blog-main">
                        <div className="blog-post">
                                <p>
                                    <h3><strong>Juergen Seyler, Director</strong></h3>
                                    <br/>
                                </p>
                                <p>
                                    <img src={require('./img/Jeurgen_headshot_square.jpg')} alt="Juergen Seyler" width="150px;"/>
                                </p>
                        </div>
                    </div>
                </div>
                <hr className={styles.featuretteDivider}/>
                <div className="row">
                    <div className="col-sm-8 blog-main">
                        <div className="blog-post">
                                <p>
                                    <h3><strong>Tom Stephens, Director, Business Development</strong></h3>
                                    <br/>
                                </p>
                                <p>
                                    <div className={'pull-left ' + styles.lider_img}><img src={require('./img/TomS_Headshot_square.jpg')} alt="Tom Stephens" width="150px;"/></div>
                                    Tom Stephens is a strategic entrepreneur and organizational leader with more than 28 years of proven success. Prior to AoT, Tom was US Country Head at CADISON Products, Neilsoft, Inc. where he established a North American presence for their XXXXXX.  He was director of business development at The Re-Wired Group, and President & CEO of Edutronix, providing leading educational software, CAD, rapid prototyping and program services to educational institutions across the US.
                                </p>
                        </div>
                    </div>
                </div>
                <hr className={styles.featuretteDivider}/>
            </div>
        </div>
    );
  }
}

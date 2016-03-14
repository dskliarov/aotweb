import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

export default class InternalCarousel extends Component {
  render() {
    const styles = require('./Carousel.scss');
    return (
        <Carousel className={styles.carousel}>
            <CarouselItem className={styles.item}>
                <img width={900} height={500} alt="First slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="carousel-caption">
                    <h3>Simplify Controls and Automation System Development</h3>
                    <p>Programmable Automation Controls</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item} data-interval="20000">
                <img width={900} height={500} alt="Second slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="carousel-caption">
                    <h3>Simplify Controls and Automation System Development</h3>
                    <p>Embedded controls</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item} data-interval="10000">
                <img width={900} height={500} alt="900x500" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="carousel-caption">
                    <h3>Simplify Controls and Automation System Development</h3>
                    <p>Industrial PCs</p>
                </div>
            </CarouselItem>
        </Carousel>
);
  }
}


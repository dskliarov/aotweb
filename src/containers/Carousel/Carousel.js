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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item}>
                <img width={900} height={500} alt="Second slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="carousel-caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item}>
                <img width={900} height={500} alt="900x500" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="carousel-caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item}>
                <img width={900} height={500} alt="900x500" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="carousel-caption">
                    <h3>Forth slide label</h3>
                    <p>Vel scelerisque nisl consectetur.</p>
                </div>
            </CarouselItem>
        </Carousel>
);
  }
}


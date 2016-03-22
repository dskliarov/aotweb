import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

export default class InternalCarousel extends Component {
  render() {
    const styles = require('./Carousel.scss');
    return (
        <Carousel className={styles.carousel} >
            <CarouselItem className={styles.item}>
                <img src="http://image.shutterstock.com/z/stock-photo-mlada-boleslav-czech-republic-may-skoda-auto-celebrates-years-since-its-establishemnt-by-380748055.jpg"/>
                <div className="carousel-caption">
                    <h3>Simplify Controls and Automation System Development</h3>
                    <p>Programmable Automation Controls</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item} data-interval="20000">
                <img src="http://image.shutterstock.com/z/stock-photo-mlada-boleslav-czech-republic-may-skoda-auto-celebrates-years-since-its-establishemnt-by-255424837.jpg"/>
                <div className="carousel-caption">
                    <h3>Simplify Controls and Automation System Development</h3>
                    <p>Embedded controls</p>
                </div>
            </CarouselItem>
            <CarouselItem className={styles.item} data-interval="10000">
                <img src="http://image.shutterstock.com/z/stock-photo-mlada-boleslav-czech-republic-may-skoda-auto-celebrates-years-since-its-establishemnt-by-82660969.jpg"/>
                <div className="carousel-caption">
                    <h3>Simplify Controls and Automation System Development</h3>
                    <p>Industrial PCs</p>
                </div>
            </CarouselItem>
        </Carousel>
    );
  }
}


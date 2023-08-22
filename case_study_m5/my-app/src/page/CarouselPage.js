import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'


export default function CarouselPage() {
  return (
<div id="carousel">
    <Carousel>
    <Carousel.Item interval={1000}>
    <img
          className="d-block w-100"
          src="https://bietthubientrieudo.com/wp-content/uploads/2016/07/KCYw1466669026_Untitled-1.png"
          alt="First slide"
        />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <img
          className="d-block w-100"
          src="https://atmosphereresorts.com/wp-content/uploads/2020/03/Main-pool-and-beach-at-Atmosphere-Resorts-Spa.jpg"
          alt="First slide"
        />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src="https://auroraresort.vn/timthumb.php?src=http://auroraresort.vn/uploads/images/banner-L1-13118-compressed.jpg&w=4096&h=1700&zc=1&q=100"
          alt="First slide"
        />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

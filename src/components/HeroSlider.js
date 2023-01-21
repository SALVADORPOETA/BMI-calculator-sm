import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HeroSlider = () => {
  return (
    <>
        <Carousel>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>This is the first slide!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>This is the second slide!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1421898/pexels-photo-1421898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>This is the third slide!</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fourth slide"
            />
            <Carousel.Caption>
            <h3>This is the fourth slide!</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </>
  )
}

export default HeroSlider
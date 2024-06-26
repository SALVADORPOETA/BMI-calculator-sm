import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const HeroSlider = () => {
  return (
    <>
        <Carousel>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/running-group-outdoors-in-sports-gear.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
                <div className='car-cap' >
                    <h3>This is the first slide!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1556911073-a517e752729c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
            />
            <Carousel.Caption>
                <div className='car-cap' >
                    <h3>This is the second slide!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://d29za44huniau5.cloudfront.net/uploads/2022/8/become-a-zumba-instructor-og-image.jpeg" 
            alt="Third slide"
            />
            <Carousel.Caption>
                <div className='car-cap' >
                    <h3>This is the third slide!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src="https://i.insider.com/5d52d8dd855562202a2ac508?width=1136&format=jpeg"
            alt="Fourth slide"
            />
            <Carousel.Caption>
                <div className='car-cap' >
                    <h3>This is the fourth slide!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </>
  )
}

export default HeroSlider
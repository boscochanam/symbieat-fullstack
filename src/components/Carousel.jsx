import React,  { useEffect } from 'react';
import hilltop from '../static/symbieat_images/hilltop.jfif';
import lhbc from '../static/symbieat_images/lhbc.jpg';
import sicsr from '../static/symbieat_images/sicsr.jpg';
import smcw from '../static/symbieat_images/smcw.jpg';
import viman_nagar from '../static/symbieat_images/viman_nagar.jpg';

function Carousel() {
  // Define carousel items with location names and images
  const carouselLocations = [
    {
      title: 'Lavale Hillbase Campus',
      imageSrc: lhbc, 
    },
    {
      title: 'SMCW Cafeteria',
      imageSrc: smcw, 
    },
    {
      title: 'Hilltop Campus',
      imageSrc: hilltop, 
    },
    {
      title: 'SYMBIEAT at SICSR & SiG.',
      imageSrc: sicsr, 
    },
    {
      title: 'Viman Nagar',
      imageSrc: viman_nagar, 
    },
  ];

  useEffect(() => {
    // Programmatically activate the carousel and start auto-play
    const myCarousel = new window.bootstrap.Carousel(document.getElementById('myCarousel'), {
      interval: 3000, // Set the auto-play interval to 3000ms (3 seconds)
    });
    
    // Ensure the carousel is paused when the component unmounts
    return () => {
      myCarousel.pause();
    };
  }, []);
    

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        {carouselLocations.map((location, index) => (
          <li
            key={index}
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {carouselLocations.map((location, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={location.imageSrc}
                alt={location.title}
                className="d-block w-100"
                style={{ objectFit: 'cover', maxHeight: '400px' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>{location.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>  
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;

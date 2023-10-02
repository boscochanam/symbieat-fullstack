import React from 'react';

function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol>

      {/* Carousel Inner */}
      <div className="carousel-inner">
  <div className="carousel-item active">
    <div className="d-flex justify-content-center align-items-center">
      <img
        src="https://www.collegebatch.com/static/clg-gallery/symbiosis-international-university-pune-242394.jpg"
        alt="SIT"
        className="d-block w-100"
        style={{ objectFit: 'cover', maxHeight: '400px' }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h1>SIT</h1>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="d-flex justify-content-center align-items-center">
      <img
        src="https://www.scit.edu/assets/images/campus/Cafeteria2.jfif"
        alt="Campus 2"
        className="d-block w-100"
        style={{ objectFit: 'cover', maxHeight: '400px' }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h1>Campus 2</h1>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="d-flex justify-content-center align-items-center">
      <img
        src="https://fastly.4sqi.net/img/general/600x600/13144957_bcEv1_af9XJWcq6O_NJGJt-RLoRx0tnxWaw72iIYN_I.jpg"
        alt="Campus"
        className="d-block w-100"
        style={{ objectFit: 'cover', maxHeight: '400px' }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h1>Campus 3</h1>
      </div>
    </div>
  </div>
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
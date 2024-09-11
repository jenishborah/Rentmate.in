import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

// Correctly import video files from src/assets
import video1 from '../assets/Video1.mp4';
import video2 from '../assets/video2.MP4';

  // Correctly import images from src/assets
import photo1 from '../assets/P1.png';
import photo2 from '../assets/P2.png';
import photo3 from '../assets/P3.jpeg';
import photo4 from '../assets/P4.jpeg';


   
    

const Hero = () => {
  const photoSlides = [photo1, photo2, photo3, photo4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const videoSlides = [video1, video2];


  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Ideal Room or PG with Rentmate.in</h1>
        <p>We digitize and organize the rental market. Search verified rental rooms, PGs, and private hostels with ease.</p>
        <button className="hero-button">Coming Soon...</button>
      </div>
      <div className="media-section">

        <div className="media-videos">
          <h2>Our Video Tours</h2>
          <Slider {...settings}>
            {videoSlides.map((src, index) => (
              <div key={index} className="media-slide">
                <video className="video-frame" controls>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;

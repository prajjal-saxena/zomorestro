import { Container, Typography } from '@mui/material'
import React from 'react'
// import { Container } from 'react-bootstrap'
import Slider from "react-slick";


const TopRestro = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
        arrow: true
      };

  return (
    <>
    <Container>
        <Typography variant='h3' textAlign='center'>Top Restraurants</Typography>
        <div>
        <Slider {...settings}>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      </Container>
      </> 
  )
}

export default TopRestro
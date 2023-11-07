import { Container, Typography } from '@mui/material'
import React from 'react'
import { Stack } from 'react-bootstrap';
// import { Container } from 'react-bootstrap'
import Slider from "react-slick";


const TopRestro = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        arrow: false
      };

  return (
    <>
    <Container>
        <div style={{marginBottom: "80px"}}>
        <Stack direction= 'horizontal'>
           <Stack style={{width: "20%"}}><img src="/top/toprestro.png" width='40%' alt="" /></Stack>
           <Stack style={{width: "80%"}}>
                <Slider {...settings}>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/top/top1.png" width="40%" alt="" /> 
                  </div>
                  <p style={{textAlign: "center", color: "#fff"}}>Agarwal Restraurant</p>
                </div>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/top/top2.png" width="40%" alt="" /> 
                  </div>
                  <p style={{textAlign: "center", color: "#fff"}}>Food Bus</p>
                </div>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/top/top3.png" width="40%" alt="" /> 
                  </div>
                  <p style={{textAlign: "center", color: "#fff"}}>Good Bowl</p>
                </div>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/top/top4.png" width="40%" alt="" /> 
                  </div>
                  <p style={{textAlign: "center", color: "#fff"}}>Sassy Indian</p>
                </div>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/top/top5.png" width="40%" alt="" /> 
                  </div>
                  <p style={{textAlign: "center", color: "#fff"}}>Spice Bazzar</p>
                </div>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/top/top6.png" width="40%" alt="" /> 
                  </div>
                  <p style={{textAlign: "center", color: "#fff"}}>Murthalwala</p>
                </div>
              </Slider>
           </Stack>
        </Stack>
        
      </div>
      </Container>
      </> 
  )
}

export default TopRestro
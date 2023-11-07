import { Stack, Typography } from '@mui/material'
import React from 'react'
import style from 'styled-components'
import { Box, Button, Container, Grid } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import {NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Product = () => {
  return (
    <>
    <Wrapper>
    
      <Stack>
         <img className='coverproduct' src="/Product/coverpro.png" alt="" />
         <Stack sx={{position: 'absolute', height: "400px", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <Typography variant='h1' color='#fff'>Aggarwal Restraurant</Typography>
         </Stack>

         <Container>
            <Stack direction='horizontal' sx={{marginTop: "50px"}}>
                <Stack color='#fff' sx={{width : "30%", background: "#ffffff38", height: "286px",  justifyContent: "center", alignItems: "center"}}>
                    <Typography variant='p' sx={{letterSpacing : "3px"}}><strong>Breakfast</strong></Typography>  
                    <Typography variant='p' sx={{letterSpacing : "3px"}}><strong>Lunch</strong></Typography>
                    <Typography variant='p' sx={{letterSpacing : "3px"}}><strong>Dinner</strong></Typography>
                </Stack>
                <Stack sx={{width : "70%", height: "600px",overflowX: "hidden"}}>
                    <Container>
                        <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>

                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>
                                  <Grid item xs={2} sm={4} md={4}>
                                      <Item>
                                          <img width='100%' height='150px' src="/home1.jpg" alt="" />
                                          <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                                              <Typography variant='p'><strong>Idli</strong></Typography>
                                              <Typography variant='p'><strong>Rs 50</strong></Typography>
                                          </Stack>
                                          <Button variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</Button>
                                      </Item>
                                  </Grid>

                              </Grid>
                        </Box>
                    </Container>
                </Stack>
            </Stack>
          </Container>
      </Stack>
    </Wrapper>
    </>
  )
}

const Wrapper = style.div`
    .coverproduct{
       height: 400px;
    }
    .btn:hover{
      background: #000;
   }
   a.addBtn {
    background: #8C7E65;
    width: 100%;
    display: block;
    padding: 8px 26px;
    color: #fff;
    text-decoration: none;
}
a.addBtn:hover{
  background: #000;
}
`
export default Product
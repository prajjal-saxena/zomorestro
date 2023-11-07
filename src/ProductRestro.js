import React from 'react'
import { Box, Container, Grid, Stack } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import style from 'styled-components';
import {NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProductRestro = () => {
  return (
    <Wrapper>
        <Box  sx={{background: "url('/cover.jpg')no-repeat center center/cover",
     marginTop: "25px"}}>
    <Container>
       <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item sx={{height: "282px"}}>
                        <img width='100%' height='250px' src='/home1.jpg' alt="" />
                        <Stack sx={{flexDirection: "row"}} class="foodname" justifyContent='space-between'>
                            <Typography variant='p'><strong>Aggarwal Restraurant</strong></Typography>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
       </Box>
    </Container>
    </Box>
    </Wrapper>
  )
}

const Wrapper = style.div`
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
.foodname{
    position: relative;
    bottom: 51px;
    justify-content: center;
    color: #fff;
    background: #000000c4;
    padding: 10px;
}
}
`
export default ProductRestro
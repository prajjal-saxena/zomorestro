import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Cover = () => {
  return (
   <Wrapper>
        <Stack style={{position: 'relative', bottom: "80px", width:  '100%'}}>
            <Stack sx={{position: 'relative'}}>
                <img src='/cover.png' className='coverHome'></img>
                <Stack sx={{position: 'absolute', height: '750px', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography sx={{color: '#fff', fontSize: '70px', letterSpacing:"2px", fontFamily: "'Edu TAS Beginner', cursive"}}>Food Order At  Any Time...</Typography>
                </Stack>
            </Stack>
        </Stack>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .coverHome{
     height: 750px;
  }
`
export default Cover
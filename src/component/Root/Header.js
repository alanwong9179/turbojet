import React from 'react'
import styled from '@emotion/styled'
import { Stack, Box, IconButton } from '@mui/material'
import LogoImage from '../../image/TJT_Logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

export default function Header({setOpenDrawer}) {
    return (
        <Stack direction={"row"} alignItems={"center"}>
            <Box flex={1} textAlign={"left"}>
                <IconButton onClick={()=>{setOpenDrawer(true)}}>
                    <MenuIcon color='primary'/>
                </IconButton>
            </Box>
            <Box flex={1}><img src={LogoImage} height={40} /></Box>
            <Box flex={1} textAlign={"right"}>
                <IconButton>
                    <PersonIcon  color='primary'/>
                </IconButton>
            </Box>
        </Stack>
    )
}

const HeaderContainer = styled.div`
  
`
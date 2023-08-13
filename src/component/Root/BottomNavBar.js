import React from 'react'
import styled from '@emotion/styled'
import { IconButton, Stack, Typography } from '@mui/material'
//icon
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SailingIcon from '@mui/icons-material/Sailing';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import color from '../../config/color';

const ButtonNavArray = [
    { name: "飛航船票", icon: <DirectionsBoatIcon />, linkTo: 'ferry' },
    { name: "跨境車", icon: <DriveEtaIcon />, linkTo: 'limo' },
    { name: "澳門澳上遊", icon: <SailingIcon />, linkTo: 'macauCruise' },
    { name: "機場巴士", icon: <AirplanemodeActiveIcon />, linkTo: 'airportBus' },
]

const ButtonIconButton = ({ href }) => {
    let { name, icon, linkTo } = href
    return (
        <Stack flex={1} sx={{alignItems:'center'}}>
            <IconContainer>
                <IconButton sx={{backgroundColor: color.primary, color: '#FFF', "&:hover": {backgroundColor:color.primary}}}>
                    {icon}
                </IconButton>
            </IconContainer>
            <Typography color={"primary"} fontWeight={"bold"}>{name}</Typography>
        </Stack>

    )
}

export default function BottomNavBar() {
    return (
        <Stack direction={"row"} width={"100%"} >
            {
                ButtonNavArray.map((href, index) => (
                    <ButtonIconButton href={href} index={index} />
                ))
            }
        </Stack>
    )
}

const IconContainer = styled.div`
align-self: center
`;

import { Box, Drawer } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import BottomNavBar from '../component/Root/BottomNavBar'
import Header from '../component/Root/Header'
import LeftDrawer from '../component/Root/LeftDrawer'


export default function Root() {

  const [openDrawer, setOpenDrawer] = useState(false)


  return (
    <MainPageContainer >
      <MainPageHeader>
        <Header setOpenDrawer={setOpenDrawer}/>
      </MainPageHeader>
      <PromotionSectionContainer>
        <Outlet />
      </PromotionSectionContainer>
      <BottomNavContainer>
        <BottomNavBar />
      </BottomNavContainer>

      <Drawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}

      >
        <LeftDrawer />
      </Drawer>
    </MainPageContainer>

  )
}


const MainPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

const MainPageHeader = styled.div`

`

const PromotionSectionContainer = styled.div`
flex: 1;
overflow: auto
`;

const BottomNavContainer = styled.div`
border-top: 1px solid #ebebeb;
padding-top: 5px;
`;

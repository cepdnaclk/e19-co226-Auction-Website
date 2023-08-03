import React from 'react'
import SideBar from './SideBar'
import useMediaQuery from "@mui/material/useMediaQuery";
import {Box} from '@mui/material';
import Header from '../themes/Header';
import NavBar from './NavBar';
const DashBoard = () => {
    const props = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box className="flex">
        <SideBar/>
        <div className={` ${props ? "left-72 w-[calc(100%-300px)]" : "left-20 w-[calc(100%-55px)]"} absolute`}>
        <NavBar/>
        <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="65px">
        <Header title="DASHBOARD" subtitle="BIDCIRCLE Seller dashboard" />

      </Box>
     
      </Box>
      </div>
      </Box>
      </>
  )
}

export default DashBoard
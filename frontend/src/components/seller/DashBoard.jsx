import React from 'react'
import SideBar from './SideBar'
import useMediaQuery from "@mui/material/useMediaQuery";
import {Box} from '@mui/material';
import Header from '../themes/Header';
const DashBoard = () => {
    const props = useMediaQuery("(min-width:600px)");
  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className={` ${{props} ? "left-72 w-[calc(100%-300px)]" : "left-20 w-[calc(100%-50px)]"} absolute p-2 m-2`}>
        <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="BIDCIRCLE Seller dashboard" />

      </Box>
      </Box>
      </div>
      </div>
      </>
  )
}

export default DashBoard
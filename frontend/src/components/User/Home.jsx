import React from 'react'

import useMediaQuery from "@mui/material/useMediaQuery";
import {Box} from '@mui/material';

import UserNavBar from './UserNavBar'
import Listings from './Listings';
const Home = () => {
    const props = useMediaQuery("(min-width:600px)");
    return (
      
         
          <div style={{ width: '100%' }}>
            <UserNavBar />
            <Box m="20px" p="65px" className="mt-16 p-4">
              {/* HEADER */}
              
              {/* <AddItem /> */}
              {/* <Test/> */}
              <Listings/>
              </Box>
          
          </div>
        
      );
    };

export default Home
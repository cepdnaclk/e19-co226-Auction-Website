import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListingService from '../../services/ListingService';
import ImageGrid from './ImageGrid';
import MainImage from './MainImage';
import { Grid } from '@mui/material';
import { Details, Height } from '@mui/icons-material';
import UserNavBar from './UserNavBar'
import {Typography, Box, Button, Divider} from '@mui/material';



const OneListing = () => {
    const [imageList, setImageList] = useState([]);

    const [detail, setdetail] = useState([]);
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  //convert encoded byte array to blob url
  function byteArrayToImage(byte) {
    const decodedData = atob(byte);

      // Create a Uint8Array from the decoded data
      const byteArray = new Uint8Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++) {
        byteArray[i] = decodedData.charCodeAt(i);
      }
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      
      return imageUrl;
  }
  

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await ListingService.getItemData(id);
        setdetail(response.data);
    
    
    const d = response.data.data.map(e => (
         byteArrayToImage(e)
      ));
      setImageList(d);
       
            
       
       console.log(imageList)
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
    //   console.log(detail);
      
      
      
    };
    fetchData();
  }, [id]);
  console.log(detail);
  console.log(imageList)
  imageList.map(e=>{
    console.log("hi")
  })

  return (
    <div style={{padding:'15px', margin:'5px'}}>
        <UserNavBar/>
        <Grid container   gap={2} sx={{marginTop:'65px'}}>
            <Grid item sm={1}>
            <Grid container direction="column" justifyContent="flex-start"
  alignItems="center"  sx={{height:'500px'}} gap={1}>
                {imageList.map((image)=>(
                    <img src={image} style={{height:'70px'}}/>
                ))}
                
                </Grid>
            </Grid>
            <Grid item sm={5}>
            <img src={imageList[0]} style={{height:'500px'}}/>
            </Grid>
            <Grid item sm={5}>
                <Typography variant='h4' sx={{color:'#006064'}}>{detail.title}</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Typography variant='subtitle1' sx={{color:'#212121'}}>Description</Typography>
        <Typography variant='subtitle1' sx={{color:'#212121'}}>{detail.description}</Typography>
    
 
    </div>
  )
}

export default OneListing
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListingService from '../../services/ListingService';
import ImageGrid from './ImageGrid';
import MainImage from './MainImage';
import { Grid } from '@mui/material';
import { Details } from '@mui/icons-material';




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
    
    
    const d = response.data.data.map(e => ({
        img: byteArrayToImage(e)
      }));
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

  return (
    <div>jj
    

    </div>
  )
}

export default OneListing
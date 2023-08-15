import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListingService from '../../services/ListingService';
import ImageGrid from './ImageGrid';
import MainImage from './MainImage';

const OneListing = () => {
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
  const [imageList, setImageList] = useState([]);
  const [title, settitle] = useState();
const [data, setdata] = useState()

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await ListingService.getItemData(id);
    
    const newItems = {
      
      title: response.data.title,
      description: response.data.description,

      
    };

    setdata(newItems);

    const data = response.data.data.map(e => (
      
        byteArrayToImage(e)
        
        
      ));
  
      setImageList(data);
            
       
            
       
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
      
      
    };
    fetchData();
  }, []);


  return (
    <div>{id}{data.title}</div>
  )
}

export default OneListing
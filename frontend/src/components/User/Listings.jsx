import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListingService from '../../services/ListingService';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const Listings = () => {
const [itemData, setitemData] = useState([]);
const [url, seturl] = useState();
//const itemData = []


useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await ListingService.getall();
       
        
        console.log(response.data);
        //setitemData(response.data)
        response.data.forEach(e => {
            //console.log(e.data)
             const list = {id:e.id, title:e.title, img: byteArrayToImage(e.data)};
            // setitemData(itemData => [...itemData, list]);
            setitemData([...itemData, list])
            
            
            console.log(byteArrayToImage(e.data));
            seturl(byteArrayToImage(e.data));
            console.log("h");
            
        });
        console.log(itemData);
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }console.log(itemData)
      
      
    };
    fetchData();
  }, []);
  function byteArrayToImage(byte) {
    const decodedData = atob(byte);

      // Create a Uint8Array from the decoded data
      const byteArray = new Uint8Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++) {
        byteArray[i] = decodedData.charCodeAt(i);
      }
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      seturl(imageUrl);
      return imageUrl;
  }


  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
    <ImageList sx={{ width: '100%'}}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{width: 400}}>
          <img
            src={item.img}
           
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}

export default Listings
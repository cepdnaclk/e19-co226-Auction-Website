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
import UserService from '../../services/UserService';



const OneListing = () => {
    const [imageList, setImageList] = useState([]);

    const [detail, setdetail] = useState([]);
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [idx, setIdx] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const [bid, setBid]=useState({
    userName: user.userName ,
    price: '',
    id: id
  })

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
  const handleChangeImg = (id)=>{
    setIdx(id);
  }

  const handleBid = ()=>{
    UserService.saveBid(bid);
    window.location.reload();

  }
  

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await ListingService.getItemData(id);
        setdetail(response.data);
        const priceUpdated = parseInt(response.data.startPrice)+parseInt(response.data.incrementPrice)
        setBid({...bid, price:priceUpdated.toString() })
    
    
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
                {imageList.map((image,index)=>(
                    <Button onClick={()=>handleChangeImg(index)}><img src={image} style={{height:'70px'}}/></Button>
                ))}
                
                </Grid>
            </Grid>
            <Grid item sm={5}>
            <img src={imageList[idx]} style={{height:'500px'}}/>
            </Grid>
            <Grid item sm={5}>
                <Typography variant='h4' sx={{color:'#006064'}}>{detail.title}</Typography>
                <Divider/>
                <br/>
                <Typography variant='h6' sx={{color:'#1a237e', fontWeight:'bold'}}>Current Price:</Typography>
                <Typography variant='h3' sx={{color:'#1a237e', fontWeight:'bold'}}>LKR {detail.startPrice}.00</Typography>
                <br/>
                <Divider/>
                <br/>
                <Typography variant='subtitle1' sx={{color:'#212121'}}>Auction Ends on {detail.endDate}</Typography>
                <br/>
                <Divider/>
                
                <br/>
                <Typography variant='h7' sx={{color:'#212121', fontWeight:'bol'}}>Increment Price: LKR {detail.incrementPrice}.00
                </Typography>
                <br/>
                <br/>
                <Divider/>
                <Box display="grid" direction="column" gap={1} marginTop={4}>
                
                <Button  color='secondary' variant='contained' onClick={handleBid} >  
            Place a bid
          </Button>
          
        
            <Button  color='secondary' variant='contained' >  
                Add to watchList
            </Button>
         
          </Box>
          
            </Grid>
        </Grid>
        <Typography variant='subtitle1' sx={{color:'#212121'}}>Description</Typography>
        <Typography variant='subtitle1' sx={{color:'#212121'}}>{detail.description}</Typography>
    
 
    </div>
  )
}

export default OneListing
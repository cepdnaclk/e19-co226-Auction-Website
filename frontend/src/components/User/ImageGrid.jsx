import React from 'react'
import { Grid } from '@mui/material'

const ImageGrid = ({images}) => {
  return (
    <Grid container direction="column">
        {images.map(image=> {
            <img src={image} height={100} style={{cursor:"pointer"}}/>
        })}
    </Grid>
  )
}

export default ImageGrid
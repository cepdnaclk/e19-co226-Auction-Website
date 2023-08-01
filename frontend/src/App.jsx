import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  

  return (
    <BrowserRouter>
    {/* // <ThemeProvider theme={darkTheme}>
    // <CssBaseline />
    
    // <Routes>
    // <Route path ="/" element ={<Test/>}/>
    //   <Route path ="/signup" element ={<Signup/>}/>
    // </Routes>
    // </ThemeProvider> */}
    <Routes>
      <Route path ="/" element ={<Signup/>}/>

    </Routes>
    </BrowserRouter>
      
  )
}

export default App

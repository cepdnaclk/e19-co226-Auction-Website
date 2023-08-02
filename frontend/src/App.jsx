import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, cyan, indigo } from '@mui/material/colors';


const lightTheme = createTheme({
  palette: {
    primary: blue,
    secondary: indigo
  },
});


function App() {
  

  return (
    <BrowserRouter>
   
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
    <Routes>
      <Route path ="/" element ={<Signup props = "signup"/>}/>
      <Route path ="/signup" element ={<Signup props = "signup"/>}/>
      <Route path ="/login" element ={<Signup props = "login"/>}/>
   


    </Routes>
    </ThemeProvider>
    </BrowserRouter>
      
  )
}

export default App

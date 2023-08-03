import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, cyan, indigo } from '@mui/material/colors';
import SellerDashBoard from './components/seller/DashBoard';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';


const lightTheme = createTheme({
  palette: {
    primary: blue,
    secondary: indigo
  },
});


function App() {
  

  return (
 
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
    <Routes>
     
    <Route path="/" element={<Layout />}>
    <Route path ="/" element ={<Signup props = "signup"/>}/>

      <Route path ="/" element ={<Signup props = "signup"/>}/>
      <Route path ="/signup" element ={<Signup props = "signup"/>}/>
      <Route path ="/login" element ={<Signup props = "login"/>}/>

//potected route
     <Route element={<RequireAuth allowedRoles="ROLE_SELLER" />}>
      <Route path = "/seller/dashboard" element = {<SellerDashBoard/>}/>
      </Route>
      </Route>


   


    </Routes>
    </ThemeProvider>
 
    


      
  )
}

export default App

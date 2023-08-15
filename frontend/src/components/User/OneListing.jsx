import React from 'react'
import { useLocation } from 'react-router-dom';

const OneListing = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  return (
    <div>{id}</div>
  )
}

export default OneListing
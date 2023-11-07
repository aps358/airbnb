import React from 'react'
import { Button } from "@mui/material"
import "./banner.css"

function Banner() {
  return (
    <div className='banner__container'>
        <div className='banner__info'>
            <h1>Get out and streched your imagination</h1>
            <p>
                Plan a different kind of gateway to uncover the hidden gems near you.
            </p>
            <Button variant="outlined">Explore near me</Button>
        </div>
    </div>
  );
}

export default Banner
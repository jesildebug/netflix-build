import React, { useEffect } from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row';
import "../App.css"
import requests from '../Request';



const HomeScreen = () => {

  return (
    <div className='homeScreen'>
      <Nav/>
      <Banner/>
      <Row
      title='NETFLIX ORIGINALS'
      fetchUrl={requests.originals}
      isLargeRow
      />
      <Row title="Top Rated"   fetchUrl={requests.topRated}/> 
      <Row title="Now Playing" fetchUrl={requests.nowPlaying}/>
      <Row title=" Popular"    fetchUrl={requests. popular}/>
      <Row title="Upcoming"    fetchUrl={requests.upcoming}/>
      {/* <Row title="Latest"      fetchUrl={requests.latest}/> */}
      <Row title="Action"      fetchUrl={requests.action}/> 
    </div>
  )
}

export default HomeScreen






      





  
  

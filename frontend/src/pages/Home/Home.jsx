import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Navbar/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import CakeDisplay from '../../component/CakeDisplay/CakeDisplay'
import Blog from '../../component/Blog/Blog'


const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <CakeDisplay category={category}/>
      <Blog/>
    </div>
  )
}

export default Home

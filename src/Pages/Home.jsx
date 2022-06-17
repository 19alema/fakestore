import React from 'react'
import Navbar from '../Components/Navbar'
import Jewellery from '../Components/Jewellery'
import Women from "../Components/Women"
import Men from "../Components/Men"
import Electronics from '../Components/Electronics'
function Home() {
 
  return (
      <div>
          <Navbar />
          <Jewellery />
          <Women />
          <Men />
          <Electronics />
    </div>
  )
}

export default Home
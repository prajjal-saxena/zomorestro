import React from 'react'
import Cover from './component/Cover'
import TopRestro from './component/TopRestro'
import ProductRestro from './ProductRestro'

const Home = () => {
  return (
    <>
      <div style={{background: "url(/bodycover.jpg)no-repeat center center/cover"}}></div>
        <Cover/>
        <TopRestro/>
        <ProductRestro/>
    </>
  )
}

export default Home
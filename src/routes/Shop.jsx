import React from 'react'
import ProductListing from '../components/products/ProductListing'
import Search from  '../components/Search'
function Shop() {
  return (
    <div className='md:grid grid-cols-5 md:divide-x gap-4'>
      <div className='leftSidebar cols-pan-1 p-4'>
        Filter
      </div>
      <div className="shopContent col-span-3 mx-4 p-4 space-y-4">
        <Search />
        <ProductListing />
      </div>
      <div className='rightSidebar cols-span-1 p-4'>
        Right
      </div>
    </div>
  )
}

export default Shop
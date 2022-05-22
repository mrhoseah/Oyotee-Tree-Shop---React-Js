import React from 'react'
import RefferalDiscount from '../components/Discounts/RefferalDiscount'
import Filter from '../components/Filter'
import ProductListing from '../components/products/Index'
import Search from  '../components/Search'
function Shop() {
  return (
    <div className='md:grid grid-cols-5 md:divide-x pb-4'>
      <div className='leftSidebar cols-span-1'>
        <Filter />
        <RefferalDiscount />
      </div>
      <div className="shopContent col-span-3 md:px-10 space-y-4">
        <Search />
        <ProductListing />
      </div>
      <div className='rightSidebar cols-span-1'>
        
      </div>
    </div>
  )
}

export default Shop
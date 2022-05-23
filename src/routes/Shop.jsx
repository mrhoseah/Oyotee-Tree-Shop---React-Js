import React from 'react'
import RefferalDiscount from '../components/Discounts/RefferalDiscount'
import CategoryFilter from '../components/CategoryFilter'
import PriceFilter from '../components/PriceFilter'
import ProductListing from '../components/products/Index'
import Search from  '../components/Search'
import FavoritesUi from '../components/FavoritesUi'
function Shop() {
  return (
    <div className='md:grid grid-cols-5 md:divide-x pb-4'>
      <div className='leftSidebar divide-y'>
      <h4 className='font-semibold text-sm text-slate-700 p-4'>Filter</h4>
        <CategoryFilter />
        <PriceFilter />
        <RefferalDiscount />
      </div>
      <div className="shopContent col-span-3 md:px-10 space-y-4">
        <Search />
        <ProductListing />
      </div>
      <div className='rightSidebar cols-span-1'>
        <FavoritesUi />
      </div>
    </div>
  )
}

export default Shop
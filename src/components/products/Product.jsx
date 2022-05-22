import React from 'react'
import {HeartIcon as HeartOutline} from '@heroicons/react/outline'
import {HeartIcon as HeartSolid} from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { added,rated,likeToggled} from '../../stores/products/productsSlice';
import { addedToCart } from '../../stores/cart/cartSlice';
import Rating from '../Rating';

function Product({product}) {
  const cart = useSelector((state) => state.cart)
  const item = useSelector((state) => state.products)
  const dispatch = useDispatch()
  return (
    <div className='border-2 border-slate-100 w-64 p-6 relative rounded-2xl space-y-4'>
        <img src={`http://localhost:3030/${product.image_path}`} alt={product.name} className='object-cover' />
        <div>{product.name}</div>
          <div className='flex justify-start align-middle items-center gap-2'><Rating ratingValue={3.4} /> <span className='text-sm'>({product._count.ratings})</span></div>
          <div className='flex justify-between items-end align-bottom'>
            <div>
                <p className="text-xs text-slate-200">Price</p>
                <p className='font-semibold text-sm'>{product.price}</p>
            </div>
            <button type="button" disabled={cart.added} onClick={() => dispatch(addedToCart(product))} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-semibold rounded-lg text-xs py-1.5 px-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >Add to Cart </button>        
          </div>
          <button type="button" onClick={()=>dispatch(likeToggled(product))} className={`absolute top-5 right-5 p-1.5 rounded-xl ${product._count.likes>0 ? "bg-red-100  hover:cursor-pointer" : ""}`}>
          {product._count.likes>0 ?<HeartSolid className="h-5 w-5 text-red-500 "  />:<HeartOutline className="h-5 w-5 text-red-500 " />}
          </button>
    </div>
  )
}

export default Product
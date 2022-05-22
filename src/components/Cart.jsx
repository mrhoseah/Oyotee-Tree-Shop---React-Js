import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MinusIcon, PlusIcon, XIcon }  from '@heroicons/react/outline'
import {removedFromCart,quantityIncreased,quantityDecreased} from '../stores/cart/cartSlice'

function Cart(){

    let listCart = [];
    let totalCart=0;
    const items = useSelector((state)=>state.cart)
    
    Object.keys(items).forEach(function(item){
        totalCart+=items[item].quantity * items[item].price;
        listCart.push(items[item]);
    });
    function totalPrice(price,qty){
        return Number(price * qty).toLocaleString('en-US');
    }
  const dispatch = useDispatch()
  const handleIncreaseQuantity=id=>{
    dispatch(quantityIncreased(id))
  }
  const handleDecreaseQuantity=id=>{
    dispatch(quantityDecreased(id))
  }
  const handleremove=id=>{
    dispatch(removedFromCart(id))
    console.log(items)
  }
  return (

    <div className="mt-2 py-4">
    {items.length>0 ?(
        <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Total</th>

            </tr>
          </thead>
          <tbody>
            {listCart.map((item)=>{
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 text-right">
                    <button onClick={()=>removedFromCart(item.id)} className="rounded-sm font-medium text-white bg-red-600 dark:text-red-500"><XIcon className='h-4 w-4'/></button>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{item.name} </th>
                    <td className="px-6 py-4">{item.price} </td>
                    <td className="px-6 py-4"><img src={item.image} alt={item.name} className='w-48 rounded-sm'/> </td>
                    <td className="flex justify-start align-middle items-center gap-2 px-6 py-4">
                      <button onClick={()=>quantityDecreased(item.id)} className="rounded-sm font-medium text-white bg-red-600 dark:text-gray-500"><MinusIcon className='h-4 w-4'/></button>
                      <div className='ml-2'>{item.quantity}</div>
                      <button onClick={()=>quantityIncreased(item.id)} className="rounded-sm font-medium text-white bg-blue-600 dark:text-blue-500"><PlusIcon className='h-4 w-4'/></button>
                    </td>
                    <td className="px-6 py-4">{totalPrice(item.price,item.quantity)} </td>
                  </tr>
              })
            }
          </tbody>
      </table> 
      ):<div className='p-4 text-center'>Cart empty</div>}
      </div>
  )
}
export default Cart
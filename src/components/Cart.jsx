import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MinusIcon, PlusIcon, XIcon }  from '@heroicons/react/outline'
import {removedFromCart,quantityIncreased,quantityDecreased,deleteCart} from '../stores/slices/cartSlice'

function Cart(){

    let listCart = [];
    let totalCart=0;
    const items = useSelector((state)=>state.cart)
    
    Object.keys(items).forEach(function(item){
      
      console.log(items[item].quantity)
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
  return (

    <div className="mt-2 py-4">
    {listCart.length>0 ?(
        <div className='p-2'>
          <button className='align-rignt' onClick={()=>dispatch(deleteCart())}>X</button>
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
            {listCart.map((item)=>
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 text-right">
                    <button onClick={()=>dispatch(removedFromCart(item.id))} className="rounded-sm font-medium text-white bg-red-600 dark:text-red-500"><XIcon className='h-4 w-4'/></button>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{item.name} </th>
                    <td className="px-6 py-4">{item.price} </td>
                    <td className="px-6 py-4"><img src={`http://localhost:3030/images/${item.image_url}`} alt={item.name} className='w-16 rounded-lg'/> </td>
                    <td className="flex justify-start align-middle items-center gap-2 px-6 py-4">
                      <button disabled={item.quantity==1} onClick={()=>dispatch(quantityDecreased(item.id))} className="rounded-sm font-medium text-white bg-red-600 dark:text-gray-500"><MinusIcon className='h-4 w-4'/></button>
                      <div className='ml-2'>{item.quantity}</div>
                      <button onClick={()=>dispatch(quantityIncreased(item.id))} className="rounded-sm font-medium text-white bg-blue-600 dark:text-blue-500"><PlusIcon className='h-4 w-4'/></button>
                    </td>
                    <td className="px-6 py-4">{totalPrice(item.price,item.quantity)} </td>
                  </tr>
              )
            }
          </tbody>
      </table> 
        </div>
      ):<div className='p-4 text-center'>Cart empty</div>}
      </div>
  )
}
export default Cart
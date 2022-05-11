import React from 'react'
import logo from '../logo.svg'
import styles from '../NavBar.module.scss'
import { MdFavoriteBorder } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { IoPersonCircle } from 'react-icons/io5';
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav class="font-roboto bg-white px-2 sm:px-4 py-3 rounded border-b bottom-1 border-slate-100">
          <div className='container md:flex place-content-between'>
            <div className='grid grid-cols-2 place-content-start'>
                <NavLink to="/" className='flex gap-2 items-center'>
                  <img src={logo} alt="Oyotee" className='h-8 w-8' />
                    <span className='font-semibold uppercase text-gray-800'>oyotee</span>
                </NavLink>
                <ul class="place-self-start flex flex-col mt-4 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium">
                  <li className='font-semibold text-gray-400'><NavLink className={({ isActive }) => isActive ? `text-gray-900 underline decoration-2 decoration-green-600 md:underline-offset-[28px]`: ""} to='/shop'>Shop</NavLink></li>
                  <li className='font-semibold text-gray-400'><NavLink className={({ isActive }) => isActive ? `text-gray-900 underline decoration-2 decoration-green-600 md:underline-offset-[28px]`: ""} to='/plant-care'>Plant Care</NavLink></li>
                  <li className='font-semibold text-gray-400'><NavLink className={({ isActive }) => isActive ? `text-gray-900 underline decoration-2 decoration-green-600 md:underline-offset-[28px]`: ""} to='/workshops'>Workshops</NavLink></li>
                  <li className='font-semibold text-gray-400'><NavLink className={({ isActive }) => isActive ? `text-gray-900 underline decoration-2 decoration-green-600 md:underline-offset-[28px]`: ""} to='/blogs'>Blogs</NavLink></li>
                </ul> 
            </div>
            <ul class="place-self-end flex mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium items-center">
                <li><NavLink className={({ isActive }) => isActive ? `font-semibold underline decoration-2 decoration-green-600 underline-offset-[28px]`: ""} to='/favourites'><IoBagHandleOutline/></NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? `font-semibold underline decoration-2 decoration-green-600 underline-offset-[28px]`: ""} to='/cart'><MdFavoriteBorder/></NavLink></li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? `font-semibold underline decoration-2 decoration-green-600 underline-offset-[28px]`: ""} to='/account'>
                      <button  className='outline outline-blue-200 rounded-full'><span className="text-xs"><IoPersonCircle/></span></button>
                    </NavLink>
                </li>
            </ul>
          </div>
    </nav>
  )
}

export default NavBar
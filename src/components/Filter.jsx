import { ChevronDownIcon } from '@heroicons/react/outline';
import axios from 'axios'
import { FaEuroSign } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

function Filter() {
    const [categories, setCategories] =useState([])
    const [loading,setLoading]= useState(false);
    const [error,setError]=useState(null)
    const fetchCategories =async()=>{
        setLoading(true)
        await axios.get('http://localhost:3030/categories')
        .then(res=>{
            setLoading(false)
            setCategories(res.data.sort())
        })
        .catch(err=>setError(err))
    }
    useEffect(()=>{
        fetchCategories()
    },[])
  return (
    <div className='flex flex-col justify-center align-middle gap-4 divide-y  border-b border-1 mb-4 border-gray-200'>
        <h4 className='font-semibold text-sm text-slate-700 pt-4 px-4'>Filter</h4>
        {loading && (<div>please wait...</div>)}
        {error && (<div>{error.message}</div>)}
        {categories.length>0 &&(
            <div className='py-2  px-4 mt-1'>
               {categories.map((category)=>
                <div className="flex align-middle" key={category.id}>
                    <input className="peer h-3 w-3 border border-gray-300 rounded-lg bg-white checked:accent-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={category.id} id={`category-${category.id}`}/>
                    <label className="peer-checked:font-semibold inline-block text-gray-800 text-sm" htmlFor={`category-${category.id}`}>
                    {category.name}
                    </label>
                </div>
                )}
              <button type="button" className="flex gap-2 align-middle items-center  px-3 py-2 text-sm text-center text-gray-900">
                  <span className="font-medium">Others</span> 
                  <ChevronDownIcon className='h-4 w-4 text-slate-500'/>
              </button>
            </div>
        )}
        <div className='space-y-4 my-4 flex flex-col justify-center  px-4'>
        <h4 className='font-semibold text-sm text-slate-700 mt-4'>Price Range</h4>
        <div className='flex justify-start items-center align-middle gap-6 ml-5'>
            <div>
                <button type="button" className="text-gray-400 bg-gray-200 border border-gray-200 focus:outline-none hover:bg-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Min</button>
            </div>
            <div className="relative  text-center">
                <div className="flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none">
                    <FaEuroSign className="w-3 h-3 text-gray-500"/>
                </div>
                <input type="text" id="input-group-1" value={400} class="w-16 border font-semibold border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-200 text-gray-500 text-sm rounded-lg block pl-5 p-1.5" />
            </div>
        </div>
        <div>
           <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-lg md:w-48 text-sm px-6 py-1.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800">Set Price</button>
        </div>
    </div>
    </div>
  )
}

export default Filter
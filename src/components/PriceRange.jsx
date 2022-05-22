import { FaEuroSign } from 'react-icons/fa'
import React from 'react'

function PriceRange() {
  return (
    <div className='space-y-4 my-4 flex flex-col justify-center'>
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
  )
}

export default PriceRange






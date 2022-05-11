import React,{useState} from 'react'

function Search() {
  const[searchTerm, setSearchTerm] =useState('')
  return (
      <>
          <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-ful">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input 
                  onChange={(e)=>setSearchTerm(e.target.value)}
                  type="search" 
                  value={searchTerm} 
                  id="simple-search" 
                  class="bg-gray-50 text-gray-500 text-md rounded-lg focus:ring-none block w-full pl-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-200 dark:text-white" 
                  aria-placeholder="Search" 
                />
            </div>
            {searchTerm && (
                  <div>
                  <span className='font-display leading-tight text-gray-500'>showing results for </span><span className=" font-semibold font-monseratt ">"{searchTerm}"</span>
                </div>
            )}
      </>
  )
}

export default Search
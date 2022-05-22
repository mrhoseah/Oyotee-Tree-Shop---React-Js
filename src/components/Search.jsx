import React,{useState} from 'react'

function Search() {
  const[searchTerm, setSearchTerm] =useState('')
  return (
      <>
          <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-ful">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input 
                  onChange={(e)=>setSearchTerm(e.target.value)}
                  type="search" 
                  value={searchTerm} 
                  id="simple-search" 
                  className="bg-gray-50 text-gray-500 text-md rounded-lg focus:ring-none focus:outline-none focus:bg-slate-100 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-200 dark:text-white" 
                  aria-placeholder="Search" 
                />
            </div>
            <div className="flex justify-start flex-wrap items-center align-middle gap-3">
              <div className='py-2 text-slate-500'>Sort</div>
              <button type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-green-300 rounded-xl text-sm px-3 py-1.5 dark:bg-bgreenlue-600 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-800">Relevance</button>
              <button type="button" className="text-gray-900 shrink-0 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 rounded-xl text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Popular</button>
              <button type="button" className="shrink-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 rounded-xl text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Most New</button>
              <div className="flex justify-center">
              <div className="xl:w-96">
                <select className="
                  block
                  w-auto
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-500
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-200
                  transition
                  ease-in-out
                  rounded-xl
                  m-0
                  focus:text-gray-600 focus:outline-none" aria-label="Default select example">
                    <option value='' defaultValue>Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
            </div>
            </div>

            {searchTerm !='' && (
                  <div>
                  <span className='font-display leading-tight text-gray-500'>showing results for </span><span className=" font-semibold font-monseratt ">"{searchTerm}"</span>
                </div>
            )}
      </>
  )
}

export default Search
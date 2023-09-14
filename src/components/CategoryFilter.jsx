import { ChevronDownIcon } from '@heroicons/react/outline';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {selectedCategory} from '../stores/slices/filters/categoryFilterSlice'

function CategoryFilter() {
    const [categories, setCategories] =useState([])
    const [loading,setLoading]= useState(false);
  
    const [selected, setSelected]=useState(null)
    const [error,setError]=useState(null)
    
    const selectedCategories = useSelector((state) => state.categoryFilters)
    const dispatch = useDispatch()

    const fetchCategories =async()=>{
        setLoading(true)
        await axios.get('http://localhost:3030/categories')
        .then(res=>{
            setLoading(false)
            setCategories(res.data.sort())
        })
        .catch(err=>{
            setLoading(false)
            setError(err)
        })
    }
    useEffect(()=>{
        fetchCategories()
    },[])
    const handleChangeCatgory=(e)=>{
        setSelected(e.target.value)
        const category =categories.find((cat)=>cat.id=== selected)
        dispatch(selectedCategory(category))
    }
  return (
    <div className='py-4'>
        {loading && (<div>please wait...</div>)}
        {error && (<div className='text-red-500'>{error.message}</div>)}
        <h4 className='font-semibold text-sm text-slate-700 px-4'>Categories</h4>
        {categories.length>0 &&(
            <div className='px-4 py-2'>
               {categories.map((category)=>
                <div className='flex flex-row' key={category.id}>
                    <div className="flex align-middle" key={category.id}>
                        <input 
                            className="peer form-checkbox h-3 w-3 border rounded-sm border-gray-200 focus:ring-0 focus:ring-offset-0 text-green-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                            type="checkbox" 
                            onChange={handleChangeCatgory}
                            value={category.id} 
                            id={`category-${category.id}`}
                        />
                        <label className="peer-checked:font-semibold inline-block text-gray-800 text-sm" htmlFor={`category-${category.id}`}>
                        {category.name}
                        </label>
                    </div>
                </div>
                )}
              <button type="button" className="flex gap-2 align-middle items-center  px-3 pt-2 text-sm text-center text-gray-900">
                  <span className="font-medium">Others</span> 
                  <ChevronDownIcon className='h-4 w-4 text-slate-500'/>
              </button>
            </div>
        )}
    </div>
  )
}

export default CategoryFilter
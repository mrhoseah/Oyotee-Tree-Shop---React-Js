import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Product from './Product';

function Index() {
  const [loading,setLoading]=useState(false)
  const [products,setProducts]=useState([])
  const [error,setError]=useState(null)
  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      axios.get('http://localhost:3030/products')
      .then((res)=>{
        setLoading(false);
        setProducts(res.data)
      }).catch((err)=>{
        setLoading(false);
        setError(err)
      })
    }
  fetchData()
  }, [])
  return (
    <div>
    {loading && (<div className='py-2'>Fetching products</div>)}
    {error && (<div className='text-red-500'>{error.message}</div>)}
    <div className="flex justify-start items-center align-middle flex-wrap gap-3">
      {products && products.map((product)=>
        <Product product={product} key={product.id} />
      )}
    </div>
    </div>
  )
}

export default Index
import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import './index.scss'
import NavBar from './components/NavBar'
import Cart from "./components/Cart";
import ProductsListing from "./components/products/ProductListing";
import Product from "./components/products/Product";
import NewProduct from "./components/products/NewProduct";
import ProductRatings from "./components/products/NewProduct";
import HomePage from "./routes/HomePage"
import Favourite from "./routes/Favourite"
import PlantCare from "./routes/PlantCare"
import Workshops from "./routes/Workshops"
import Blogs from "./routes/Blogs"
import Shop from "./routes/Shop"
import Account from "./routes/profile/Account"
import Profile from "./routes/profile/Profile"
import EditProfile from "./routes/profile/EditProfile"
function App(props) {

  return (
      <div className="md:container md:mx-auto bg-white my-8 mx-4 rounded-sm">
            <header>
              <NavBar />
            </header> 
            <main className='px-4'>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/favorites' element={<Favourite />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/plant-care' element={<PlantCare />} />
                <Route path='/workshops' element={<Workshops />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="products" element={<ProductsListing />}>
                  <Route path=":productId" element={<Product />} />
                  <Route path="new" element={<NewProduct />} />
                  <Route index element={<ProductRatings />} />
                </Route>
                <Route path="account" element={<Account />}>
                  <Route path=":userId" element={<Profile />} />
                  <Route path="edit/:userId" element={<EditProfile />} />
                </Route>
              </Routes>
            </main>
        </div>
   
  )
}

export default App

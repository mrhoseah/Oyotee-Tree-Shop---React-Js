import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import './index.scss'
import NavBar from './components/NavBar'
import Cart from "./components/Cart";
import ProductsIndex from "./components/products/Index";
import CreateProduct from "./components/products/Create";
import EditProduct from "./components/products/Edit";
import ShowProduct from "./components/products/Show";
import HomePage from "./routes/HomePage"
import Favourite from "./routes/Favourite"
import PlantCare from "./routes/PlantCare"
import Workshops from "./routes/Workshops"
import Blogs from "./routes/Blogs"
import Shop from "./routes/Shop"
import Account from "./routes/profile/Account"
import Profile from "./routes/profile/Profile"
import EditProfile from "./routes/profile/EditProfile"
import {store} from './stores/store';
import {Provider} from 'react-redux'
function App(props) {
  return (
    <Provider store={store}>
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
                <Route path="products" element={<ProductsIndex />}>
                  <Route path=":productId/details" element={<ShowProduct />} />
                  <Route path=":productId/edit" element={<EditProduct />} />
                  <Route path="new" element={<CreateProduct />} />
                  <Route index element={<ProductsIndex />} />
                </Route>
                <Route path="account" element={<Account />}>
                  <Route path=":userId" element={<Profile />} />
                  <Route path="edit/:userId" element={<EditProfile />} />
                </Route>
              </Routes>
            </main>
        </div>
        </Provider>
  )
}

export default App

import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/not-found/NotFound'
import SingleRoute from './pages/single-route/SingleRoute'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import CreateProduct from './pages/admin/create-product/CreateProduct'
import ManageProduct from './pages/admin/manage-product/ManageProduct'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Login/>}/>
      <Route path='/product/:id' element={<SingleRoute/>}/>

      <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>}>
          <Route path='create' element={<CreateProduct/>}/>
          <Route path='manage' element={<ManageProduct/>}/>

      </Route>
      </Route>

      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App

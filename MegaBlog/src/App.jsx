import './App.css'
import {useDispatch} from 'react-redux'
import React , {useState, useEffect } from 'react'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    } )
    .finally(() => setLoading(false))


  },[])

  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-600 ">
    <div className=" w-full block">
    <Header />
    <main>
     <Outlet />
     {/* Ye Outlet comment tha isliye koi bhi route kaam nhi kar rhe the */}
    </main>
    <Footer />

    </div>

    </div>
  ) : null
}

export default App

import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import Login from './pages/Login'
import { AdminContext } from './context/AdminContext';

const App = () => {
  const  {atoken} = useContext(AdminContext)
  return atoken? (
    <div>
      <ToastContainer/>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>
    </>
  )

}

export default App

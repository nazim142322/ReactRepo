import React from 'react'
import { Outlet } from 'react-router-dom';
const CompA = () => {
document.title='City laptop service center';
  return (
    <div className='compa'>       
        {/* <div>CompA </div> */}
        <Outlet/>       
    </div>
   
  )
}
export default CompA  
import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import { DivCenter } from './Style'

function Dashboard({logout}) {
  return (
    <DivCenter>
        <h4>This is my Dashboard</h4>
        {/* /dashboard/settings การใช้ Route ซ้อน Route */}
        <Link to="settings">setting</Link>
        {/* Outlet จะเป็น component ที่ใช้ render ของ child route element หรือก็คือเป็นคำสั่งให้สามารถเข้า /dashboard/settings การใช้ Route ซ้อน Route ได้*/}
        <Outlet/>
        <p>Welcome User</p>
        <button onClick={()=>{
            logout();
        }}>logout</button>
    </DivCenter>
  )
}

export default Dashboard
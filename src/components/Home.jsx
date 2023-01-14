import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import { DivCenter } from './Style'

//การรับค่าโดยใช้ props จาก component แม่มายังลูก
function Home({login}) {
  //useLocation react-router-dom
  //การรับข้อมูลที่ส่งจาก path อื่นที่ส่งมาโดยใช้ useLocation()
  let location = useLocation()
  
  
  let navigate = useNavigate()

  return (
    <DivCenter>
        <h4>This is my home</h4>
        {/* การแสดงข้อมูลที่รับจาก path อื่นที่ส่งมาโดยใช้ useLocation().state */}
        <p>{location.state}</p>
        {/* การรับ function จาก props มาใช้งาน login() */}
        {/*  onClick={()=>{1;2;3;} เมือกดใช้งานหลาย function*/}
        {/*  navigate('/dashboard') คือเมื่อกดไป path /dashboard โดยใช้ useNavigate() */}
        <button onClick={()=>{
          login();
          navigate('/dashboard')
        }}>login</button>
    </DivCenter>
  )
}

export default Home
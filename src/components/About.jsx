import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { DivCenter, DivLink } from './Style'

function About() {
  let navigate = useNavigate()
  
  return (
    <DivCenter>
      <h4>This is my about</h4>
      <DivLink>
            {/* <Link to='/'>Back to Home Page</Link> */}
            {/* useNavigate การทำงานจะคลาย Link สามารถกำหนดการ Redirect(เปลี่ยนเส้นทาง) ได้ */}
            {/* state={ข้อมูล} เป็นการส่งข้อมูลไปยัง path ที่ต้องการ to='/path ที่ต้องการ' โดยใช้ button และ useNavigate('/path',{state})*/}
            <button onClick={() => navigate('/',{state:"From About Page"})}>Redirect</button>
      </DivLink>
    </DivCenter>
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
import { DivCenter ,DivLink} from './Style'

function Contact() {
  return (
    <DivCenter>
        <h4>This is my contact</h4>
        <DivLink>
          {/* state เป็นการส่งข้อมูลโดยใช้ Link ไปยัง path ที่ต้องการ to='/path ที่ต้องการ' *เหมือนการส่งข้อมูลข้าม component แม่ไปลูก แต่ไม่ใช่ */}
            <Link to='/' state={"From Contact Page"}>Back to Home Page</Link>
        </DivLink>
    </DivCenter>
  )
}

export default Contact
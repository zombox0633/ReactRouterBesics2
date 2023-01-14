import React from 'react'
import { useParams } from 'react-router-dom'
import { DivCenter } from './Style'

function Profile() {

    //useParams คือการสร้าง path โดยกำหนดเป็นอะไรก็ได้ตามเงือนใน { ข้อมูล }
    let { userId } = useParams()

  return (
    <DivCenter>
        <h4>Profile</h4>
        <p>The id of this user id {userId}</p>
    </DivCenter>
  )
}

export default Profile
import React from 'react'
import { Link } from 'react-router-dom'
import { DivCenter ,DivLink} from './Style'

function Error() {
  return (
    <DivCenter>
        <h4>This is my error</h4>
        <DivLink>
            <Link to='/' state={"From Error Page"}>Back to Home Page</Link>
        </DivLink>
    </DivCenter>
  )
}

export default Error
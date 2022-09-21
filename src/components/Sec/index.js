import {Link} from 'react-router-dom'

export default function sec(){
  return(
    <div>
      <h2>第二頁!!</h2>
      <Link to='/'>prev page</Link>
    </div>
  )
}
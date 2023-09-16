import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className="link-wrp">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Test</div>
      <ul className="nav-menu">
        <li>home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-content'>Content</li>
      </ul>
    </div>
  )
}

export default Navbar

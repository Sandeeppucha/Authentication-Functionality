// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <li className="route-link">
      <Link to="/">Home</Link>
    </li>
    <li className="route-link">
      <Link to="/about">About</Link>
    </li>
  </div>
)

export default Header

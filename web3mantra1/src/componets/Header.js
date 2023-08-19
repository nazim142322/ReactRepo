import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="navbar">                
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/best-center">About us</Link></li>
        <li><Link className="link" to="/best-service">Our Service</Link></li>
         <li><Link className="link" to="/reach-us">Reach Us</Link></li>
        </ul>
    </div>
  )
}
export default Header
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="navbar">
      <h3>Logo</h3>                
      <ul>
         <li><NavLink  to="/">Home</NavLink></li>
         <li><NavLink  to="/best-center">About us</NavLink></li>
         <li><NavLink  to="/best-service">Our Service</NavLink></li>
         <li><NavLink to="/reach-us">Reach Us</NavLink></li>
        </ul>
    </div>
  )
}
export default Header
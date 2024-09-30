// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const Navbar = ()=> {
    const navLinkStyle =({isActive}) => {
        return{
            fontweight:isActive ? 'bold' :'Normal',
            textDecoration:isActive ? 'None': 'underline',
        }
    }
  return (
    <nav>
        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/About'>About</NavLink>
        <NavLink style={navLinkStyle} to='/Product'>Product</NavLink>
  
    {/* //     <Link to= '/'> Home</Link>
    //     <Link to='/About'>About</Link> */}
      
    </nav>
  )
}

export default Navbar

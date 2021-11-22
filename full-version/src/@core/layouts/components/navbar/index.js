// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import { NavItem } from 'reactstrap'
import {
  Link,
  useLocation
} from "react-router-dom"

const ThemeNavbar = props => {
  // ** Props
  const [user, setUser] = useState(localStorage.getItem('user'))
  const location = useLocation()

  const logout = () => {
    localStorage.removeItem('user')
    setUser('')
  }

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <img src={location.pathname === '/products' ? '/LOGO-EXG-NEW.png' : '/LOGO.CAP.png'} style={{ objectFit: 'contain', height: '70px' }}></img>
      </div>
      <ul className='nav navbar-nav align-items-center ml-auto'>
        {
          !user ? <NavItem key='home' className='d-none d-block'>
            <Link className='nav-link text-white' to='/'>Home</Link>
          </NavItem> : location.pathname === '/statistics' ? "" : <NavItem key='dashboard' className='d-none d-block'>
            <Link className='nav-link text-white' to='/statistics'>Dashboard</Link>
          </NavItem>
        }
        {
          !user ? "" : user.role === "admin" ? "" : location.pathname === '/statistics' ? "" : <NavItem key='admin' className='d-none d-block'>
            <Link className='nav-link text-white' to='/admin'>Admin</Link>
          </NavItem>
        }
        {location.pathname === '/statistics' ? "" : <NavItem key='milestones' className='d-none d-block'>
          <Link className='nav-link text-white' to='/milestones'>Milestones</Link>
        </NavItem>}
        {location.pathname === '/statistics' ? "" : <NavItem key='company' className='d-none d-block'>
          <Link className='nav-link text-white' to='/company'>Company</Link>
        </NavItem>}
        {location.pathname === '/statistics' ? "" : <NavItem key='products' className='d-none d-block'>
          <Link className='nav-link text-white' to='/products'>Products</Link>
        </NavItem>}
        {location.pathname === '/statistics' ? "" : <NavItem key='intitutional' className='d-none d-block'>
          <Link className='nav-link text-white' to='/institutional'>Institutional</Link>
        </NavItem>}
        {location.pathname === '/statistics' ? "" : localStorage.getItem('user') === null ? "" : <NavItem key='account' className='d-none d-block'>
          <Link className='nav-link text-white' to='/account'>Account</Link>
        </NavItem>}
        {
          !!user ? location.pathname === '/statistics' ? <NavItem key='logout' className='d-none d-block'>
            <Link className='nav-link text-white' to='/company'><i className="fa fa-sign-out"></i>Exit</Link>
          </NavItem> : <NavItem key='logout' className='d-none d-block' onClick={e => logout()}>
              <Link className='nav-link text-white' to='/'>Logout</Link>
            </NavItem> : <NavItem key='login' className='d-none d-block'>
              <Link className='nav-link text-white' to='/login'>Login</Link>
            </NavItem>
        }
      </ul>
    </Fragment>
  )
}

export default ThemeNavbar

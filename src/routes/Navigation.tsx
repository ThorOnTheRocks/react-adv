import { BrowserRouter, NavLink, Navigate, Routes, Route } from 'react-router-dom';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React logo'/>
          <ul>
            <li>
              <NavLink to='/' className={({isActive}) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to='/user' className={({isActive}) => isActive ? 'nav-active' : ''}>User</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='about' element={<h1>About Page</h1>}/>
          <Route path='user' element={<h1>User Page</h1>}/>
          <Route path='/' element={<ShoppingPage />}/>

          <Route path='/' element={<Navigate to='/' replace/>}/>
        </Routes>
      </div>

      

    </BrowserRouter>
  );
};

export default Navigation;

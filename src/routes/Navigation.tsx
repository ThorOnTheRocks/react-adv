import { BrowserRouter, NavLink, Navigate, Routes, Route } from 'react-router-dom';
import logo from '../logo.svg'

import { 
  RegisterPage, 
  FormikBasicPage, 
  FormikYupPage, 
  FormikAbstractation, 
  FormikComponents 
} from '../03-forms/pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React logo'/>
          <ul>
            <li>
              <NavLink to='/register' className={({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic Page</NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Components Page</NavLink>
            </li>
            <li>
              <NavLink to='/formik-abstractation' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup Page</NavLink>
            </li>
            <li>
              <NavLink to='/user' className={({isActive}) => isActive ? 'nav-active' : ''}>User</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='formik-basic' element={<FormikBasicPage />}/>
          <Route path='formik-yup' element={<FormikYupPage />}/>
          <Route path='formik-components' element={<FormikComponents />}/>
          <Route path='formik-abstractation' element={<FormikAbstractation />}/>
          <Route path='user' element={<h1>User Page</h1>}/>
          <Route path='register' element={<RegisterPage />}/>
          <Route path='/*' element={<Navigate to='/register' replace/>}/>
        </Routes>
      </div>

      

    </BrowserRouter>
  );
};

export default Navigation;

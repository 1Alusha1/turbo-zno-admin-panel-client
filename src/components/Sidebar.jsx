import { NavLink } from 'react-router-dom';
import config from '../config/config';
import { removeCookie } from 'react-cookie';

const Sidebar = () => {
  const logout = () => {
    removeCookie('token', { domain: config.DOMAIN });
  };
  return (
    <aside className='sidebar'>
      <div className='sidebar-logo'>TurboZNO</div>
      <div className='option'>
        <ul className='option-list'>
          <NavLink
            to='/panel/create-teacher-group'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>Створити викладача групи </li>
          </NavLink>
          <NavLink
            to='/panel/create-teacher-sub-group'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>Створити викладача під групи</li>
          </NavLink>
          <NavLink
            to='/panel/group-list'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>Список груп</li>
          </NavLink>
        </ul>

        <div className='controller'>
          <a href='/auth' onClick={() => logout()} className='logout'>
            Вийти
          </a>
          {/* <PersonalInfo /> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

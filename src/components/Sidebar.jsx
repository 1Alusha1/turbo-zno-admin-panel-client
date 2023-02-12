import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const logout = () => {
    document.cookie = document.cookie + '; max-age=0';
  };
  const { roles } = useSelector((state) => state.user.userInfo);
  return (
    <aside className='sidebar'>
      <div className='sidebar-logo'>TurboZNO</div>
      <div className='option'>
        <ul className='option-list'>
          <NavLink
            to='/panel/group-list'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>Список власних груп</li>
          </NavLink>
          {roles.includes('ADMIN') ? (
            <>
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
                to='/panel/all-group-list'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <li>Список всіх груп</li>
              </NavLink>
            </>
          ) : (
            <></>
          )}
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

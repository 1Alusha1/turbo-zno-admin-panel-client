import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchChekAuth } from '../asyncAction/user.js';
import { useCookies } from 'react-cookie';

import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  useEffect(() => {
    dispatch(fetchChekAuth(cookies.token));
    !isAuth && navigate('/auth');
  }, [isAuth]);

  return (
    <div className='main-layout-wrap'>
      <Sidebar />
      <main className='content'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;

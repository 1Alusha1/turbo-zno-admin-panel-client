import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchChekAuth } from '../asyncAction/user.js';
import UserAlert from '../components/ui/UserAlert';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);
  const token = document.cookie.split('=')[1];
  const { type, message } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChekAuth(token));
    !isAuth && navigate('/auth');
  }, [isAuth]);

  return (
    <div className='main-layout-wrap'>
      <UserAlert type={type} message={message} />
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

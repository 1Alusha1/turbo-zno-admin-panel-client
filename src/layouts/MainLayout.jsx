import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    !isAuth && navigate('/auth');
  }, [isAuth]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;

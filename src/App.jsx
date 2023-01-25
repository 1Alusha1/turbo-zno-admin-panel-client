import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Auth from './pages/Auth';
import CreateTeacherGroup from './pages/CreateTeacherGroup';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<Auth />} />
        </Route>
        <Route path='/panel' element={<MainLayout />}>
          <Route
            index
            path='/panel/create-teacher-group'
            element={<CreateTeacherGroup />}
          ></Route>
        </Route>
        <Route path='*' element={<Navigate to='/panel' />} />
      </Routes>
    </div>
  );
}

export default App;

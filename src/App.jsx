import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Auth from './pages/Auth';
import CreateTeacherGroup from './pages/CreateTeacherGroup';
import CreateTeacherSubGroup from './pages/CreateTeacherSubGroup';
import GroupList from './pages/GroupList';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<Auth />} />
        </Route>
        <Route path='/panel' element={<MainLayout />}>
          <Route
            path='/panel/create-teacher-group'
            element={<CreateTeacherGroup />}
          ></Route>
          <Route
            path='/panel/create-teacher-sub-group'
            element={<CreateTeacherSubGroup />}
          ></Route>
          <Route path='/panel/group-list' element={<GroupList />}></Route>
        </Route>
        <Route path='*' element={<Navigate to='/panel' />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateTeacherSubGroup } from '../asyncAction/option';
import Form from '../components/Form';
import UserAlert from '../components/ui/UserAlert';
import { useCookies } from 'react-cookie';

const CreateTeacherSubGroup = () => {
  let dispatch = useDispatch();
  let [groupName, setGroupName] = useState('');
  let [teacherName, setTeaherName] = useState('');
  let [subGroupName, setSubGroupName] = useState('');
  const { message, type } = useSelector((state) => state.alert);
  const [cookies] = useCookies();
  const createTeacher = async (e) => {
    e.preventDefault();
    const userData = {
      groupName,
      teacherName,
      subGroupName,
      token: cookies.token,
    };
    await dispatch(fetchCreateTeacherSubGroup(userData));
  };

  return (
    <>
      <UserAlert type={type} message={message} />

      <Form event={(e) => createTeacher(e)}>
        <label>
          <p>Назва групи</p>
          <input
            type='text'
            onChange={(e) => setGroupName(e.target.value)}
            name='groupName'
            placeholder='Назва групи'
          />
        </label>
        <label>
          <p>Назва підгрупи</p>
          <input
            onChange={(e) => setSubGroupName(e.target.value)}
            type='text'
            name='subGroupName'
            placeholder='Назва підгрупи'
          />
        </label>
        <label htmlFor=''>
          <p>Ім`я користувача</p>
          <input
            type='text'
            name='teacherName'
            onChange={(e) => setTeaherName(e.target.value)}
            placeholder='Ім`я користувача'
          />
        </label>
        <input type='submit' className='btn' value='Створити' />
      </Form>
    </>
  );
};

export default CreateTeacherSubGroup;

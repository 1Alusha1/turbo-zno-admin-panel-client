import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateTeacher } from '../asyncAction/option';
import Form from '../components/Form';
import UserAlert from '../components/ui/UserAlert';
const CreateTeacherGroup = () => {
  let [groupName, setGroupName] = useState('');
  let [teacherName, setTeaherName] = useState('');
  const { message, type } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const createTeacher = async (e) => {
    e.preventDefault();
    const userData = {
      groupName,
      teacherName,
    };
    await dispatch(fetchCreateTeacher(userData));
  };

  return (
    <>
      <UserAlert type={type} message={message} />
      <Form event={(e) => createTeacher(e)}>
        <label htmlFor=''>
          <p>Назва групи</p>
          <input
            type='text'
            onChange={(e) => setGroupName(e.target.value)}
            name='groupName'
            placeholder='Назва групи'
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

export default CreateTeacherGroup;

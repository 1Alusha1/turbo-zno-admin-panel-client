import { useState } from 'react';
import { fetchCreateTeacher } from '../asyncAction/option';
import Form from '../components/Form';

const CreateTeacherGroup = () => {
  let [groupName, setGroupName] = useState('');
  let [teacherName, setTeaherName] = useState('');

  const createTeacher = async (e) => {
    e.preventDefault();
    const userData = {
      groupName,
      teacherName,
    };
    await fetchCreateTeacher(userData);
  };

  return (
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
  );
};

export default CreateTeacherGroup;

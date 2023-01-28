import { useState } from 'react';
import { fetchCreateTeacherSubGroup } from '../async/option';
import Form from '../components/Form';

const CreateTeacherSubGroup = () => {
  let [groupName, setGroupName] = useState('');
  let [teacherName, setTeaherName] = useState('');
  let [subGroupName, setSubGroupName] = useState('');
  const createTeacher = async (e) => {
    e.preventDefault();
    const userData = {
      groupName,
      teacherName,
      subGroupName,
    };
    await fetchCreateTeacherSubGroup(userData);
  };

  return (
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
  );
};

export default CreateTeacherSubGroup;

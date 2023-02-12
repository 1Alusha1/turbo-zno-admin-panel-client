import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  fetchDeleteStudent,
  fetchGetGroup,
  fetchRenameGroup,
} from '../asyncAction/option';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import UserAlert from '../components/ui/UserAlert';
import { setAlert } from '../store/reducers/userAlertReducer';
const CurrentGroup = () => {
  const params = useParams();
  const dispath = useDispatch();
  const token = document.cookie.split('=')[1];

  const [hideInput, setHideInput] = useState(false);
  const [hideStudents, setHideStudents] = useState(false);
  const [newName, setNewName] = useState('');

  const { group } = useSelector((state) => state.option);
  const { type, message } = useSelector((state) => state.alert);

  useEffect(() => {
    dispath(fetchGetGroup(params.id));
  }, []);

  const deleteStudent = (student) => {
    dispath(fetchDeleteStudent(student, token));
  };
  const changeName = (e) => {
    e.preventDefault();
    if (newName.length) {
      return dispath(fetchRenameGroup(group.groupName, newName, token));
    }
    dispath(
      setAlert({ type: 'error', message: 'Назва групи не може бути пустою' })
    );
  };

  return (
    <div className='group-list-wrapper'>
      <div className='mt-1'>
        <UserAlert type={type} message={message} />

        {group ? (
          <div className='current-group'>
            <div className='current-group__name'>
              Назва групи: {group.groupName}
              <button onClick={() => setHideInput(!hideInput)} className='btn'>
                Змінити назву
              </button>
            </div>
            <div className={hideInput ? 'form-wrap active' : 'form-wrap hide'}>
              <Form event={(e) => changeName(e)}>
                <label>
                  <p>Нова назва</p>
                  <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    type='text'
                  />
                </label>
                <input type='submit' className='btn' value='Змінити' />
              </Form>
            </div>
            <div className='current-group__admin'>
              Викладач у групі: {group.admin}
            </div>
            <div className='current-group__students'>
              {!group.students.length ? (
                'Студентів немає'
              ) : (
                <>
                  <p>Кількість студентів: {group.students.length}</p>

                  <button
                    onClick={() => setHideStudents(!hideStudents)}
                    className='btn'
                  >
                    {hideStudents ? 'Сховати учнів' : 'Показати учнів'}
                  </button>
                  <div className='students-list'>
                    <div
                      className={
                        hideStudents
                          ? 'students-list-wrap active'
                          : 'students-list-wrap hide'
                      }
                    >
                      {group.students.length &&
                        group.students.map(({ student }) => (
                          <div className='students-list__item' key={student.id}>
                            <p>Ім'я користувача: {student.username}</p>
                            <p>Група: {student.group}</p>
                            <button
                              className='btn'
                              onClick={() => deleteStudent(student)}
                            >
                              Видалити
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <h2>Групу не знайдено,оновіть сторінку </h2>
        )}
      </div>
    </div>
  );
};

export default CurrentGroup;

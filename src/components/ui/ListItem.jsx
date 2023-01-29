import { useState } from 'react';
import { fetchSendMessage } from '../../asyncAction/telegram';
import Form from '../Form';
const ListItem = ({ group }) => {
  const [active, setActive] = useState('');
  const [message, setMessage] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    const userData = {
      groupName: group.groupName,
      message: message,
    };
    fetchSendMessage(userData);
    setMessage('');
  };
  return (
    <div className='group-item'>
      <div className='group-item-wrap'>
        <div className='group-Name'>Назва групи: {group.groupName}</div>
        <div className='students-count'>
          Кількість студентів: {group.students.length}
        </div>
        <div className='btn' onClick={() => setActive(!active)}>
          Написати у групу
        </div>
      </div>
      <div
        className={
          active ? 'group-item-text-area active' : 'group-item-text-area'
        }
      >
        <Form event={(e) => sendMessage(e)}>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type='submit' className='btn' value='Відправити' />
        </Form>
      </div>
    </div>
  );
};

export default ListItem;

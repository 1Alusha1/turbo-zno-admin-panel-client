import { useDispatch } from 'react-redux';
import { clearAlert } from '../../store/reducers/userAlertReducer';

const UserAlert = ({ type, message }) => {
  const dispatch = useDispatch();

  if (message.length) {
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  }
  return (
    <div className={`user-alert ${message ? 'active' : ''} user-alert-${type}`}>
      {message}
    </div>
  );
};

export default UserAlert;

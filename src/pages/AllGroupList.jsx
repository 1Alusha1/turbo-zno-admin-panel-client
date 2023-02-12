import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGetAllGroups } from '../asyncAction/option';
import UserAlert from '../components/ui/UserAlert';

const AllGroupList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { groups } = useSelector((state) => state.option);
  const { userInfo } = useSelector((state) => state.user);
  const { type, message } = useSelector((state) => state.alert);

  const token = document.cookie.split('=')[1];

  useEffect(() => {
    dispatch(fetchGetAllGroups(token));
  }, [userInfo.username]);

  return (
    <div className='group-list-wrapper'>
      <UserAlert type={type} message={message} />

      {groups.length ? (
        groups.map((group) => (
          <div
            onClick={() => navigate(`/panel/all-group-list/${group._id}`)}
            className='group-item all'
            key={group.groupName}
          >
            <div className='group-item-wrap'>
              <div className='group-Name'>Назва групи: {group.groupName}</div>
              <div className='students-count'>
                Кількість студентів: {group.students.length}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Груп немає</p>
      )}
    </div>
  );
};

export default AllGroupList;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetGroups } from '../asyncAction/option';
import ListItem from '../components/ui/ListItem';
import UserAlert from '../components/ui/UserAlert';

const GroupList = () => {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.option);
  const { userInfo } = useSelector((state) => state.user);
  const { type, message } = useSelector((state) => state.alert);

  const token = document.cookie.split('=')[1];

  useEffect(() => {
    const userData = {
      teacherName: userInfo.username,
      token,
    };
    dispatch(fetchGetGroups(userData));
  }, [userInfo.username]);

  return (
    <div className='group-list-wrapper'>
      <UserAlert type={type} message={message} />

      {groups.length ? (
        groups.map((group) => <ListItem group={group} key={group.groupName} />)
      ) : (
        <p>Груп немає</p>
      )}
    </div>
  );
};

export default GroupList;

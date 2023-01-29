import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetGroups } from '../asyncAction/option';
import ListItem from '../components/ui/ListItem';

const GroupList = () => {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.option);
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchGetGroups(userInfo.username));
  }, [userInfo.username]);

  return (
    <div>
      {groups.length ? (
        groups.map((group) => <ListItem group={group} key={group.groupName} />)
      ) : (
        <p>Груп немає</p>
      )}
    </div>
  );
};

export default GroupList;

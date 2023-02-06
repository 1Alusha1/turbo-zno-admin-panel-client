import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetGroups } from '../asyncAction/option';
import ListItem from '../components/ui/ListItem';
import { useCookies } from 'react-cookie';

const GroupList = () => {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.option);
  const { userInfo } = useSelector((state) => state.user);
  const [cookies] = useCookies();
  useEffect(() => {
    const userData = {
      teacherName: userInfo.username,
      token: cookies.token,
    };
    dispatch(fetchGetGroups(userData));
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

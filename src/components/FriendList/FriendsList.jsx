import css from './FriendsList.module.css';
import propTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string,
      isOnline: propTypes.bool,
      id: propTypes.number,
    })
  ),
};

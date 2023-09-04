import css from './FriendListItem.module.css';
import propTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      {friend.isOnline === true ? (
        <span className={css.status_online}></span>
      ) : (
        <span className={css.status_offline}></span>
      )}
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: propTypes.shape({
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
    id: propTypes.number,
  }),
};

import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
    return (
        <li className={s.item} key={id}>
            <span className={isOnline ? (s.online) : (s.offline)}
            ></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    // id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
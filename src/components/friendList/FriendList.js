// import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import s from './FriendList.module.css';

export default function FriendLis({ friends }) {
    return (
        < ul className={s.friendList} >
            {
                friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))
            }
        </ul >
    )
};

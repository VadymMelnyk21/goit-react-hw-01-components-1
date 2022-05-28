// import PropTypes from 'prop-types';
import FriendListItem from 'FriendListItem'
import s from './FriendList.module.css';

export default function FriendLis() {
    return (
        <ul className={s.friendList} >
            <FriendListItem />
        </ul >
    )
};

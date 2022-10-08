 import {FriendItem,FriendImg,FriendName,FriendStatus} from '../FriendList/FriendList.styled'



export const OneFriend = ({ friends }) => {
    return (
         friends.map(({ avatar, name, isOnline, id }) => {
            return (
                <FriendItem key={id}>
                <FriendStatus status={isOnline} ></FriendStatus>
                <FriendImg src={avatar} alt={name} width="48" />
                <FriendName>{name}</FriendName>
            </FriendItem>
            )
        } )
    )
   }
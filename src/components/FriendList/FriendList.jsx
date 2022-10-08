import { FriendList } from '../FriendList/FriendList.styled'
import {OneFriend} from './FriendItem'

export const Friend = ({friends}) => {
    return (
        <FriendList>
            <OneFriend friends={friends} />
        </FriendList>
    )
   
}


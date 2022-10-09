import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friend } from './FriendList/FriendList';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="upload text" />
      <Friend friends={friends} />
      {/* <TransactionHistory/> */}
    </>
  );
};

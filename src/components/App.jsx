import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friend } from './FriendList/FriendList';
import profile from '../Json/user.json';
import statistics from '../Json/data.json';
import friends from '../Json/friends.json';


export const App = () => {
  return (
    <>
      <Profile profile={profile} />
      <Statistics statistics={statistics} title="upload text" />
      <Friend friends={friends} />
      {/* <TransactionHistory/> */}
    </>
  );
};

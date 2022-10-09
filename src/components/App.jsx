import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friend } from './FriendList/FriendList';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Company } from './Company/Company';
import company from '../json/mycompany.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="upload text" />
      <Friend friends={friends} />
      <TransactionHistory items={transactions} />
      <Company company={company} />
    </>
  );
};

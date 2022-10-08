import user from '../json/user.json';
import statData from '../json/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={statData} titleText="upload stats" />
    </div>
  );
};

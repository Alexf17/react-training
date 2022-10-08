import user from '../json/user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile user={user[0]} />
    </div>
  );
};

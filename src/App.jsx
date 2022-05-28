// імпорт компонентів
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';

// імпорт json
import user from './data/user.json';
import data from './data/data.json';
// import friends from './data/friends.json';
// import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
    </div>
  );
};

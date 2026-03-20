import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {

  const logged = useSelector(state => state.login.logged);

  return (
    <>
      <Header />
      {!logged && <Auth />}
      {logged && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;

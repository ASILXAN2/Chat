import { useUser, UserProvider } from './context/UserContext';
import Register from './components/Register';
import Chat from './components/Chat';

const InnerApp = () => {
  const { user } = useUser();
  return user ? <Chat /> : <Register />;
};

const App = () => (
  <UserProvider>
    <InnerApp />
  </UserProvider>
);

export default App;
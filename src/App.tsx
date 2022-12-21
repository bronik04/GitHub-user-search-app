import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { UserCard } from './components/UserCard';
import { defaultUser } from './mock';
import {GitHabError, GitHabUser, LocalGitHabUser} from './types';
import {isGitHabUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/extract-local-user";

const BASE_URL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGitHabUser | null>(
    defaultUser,
  );
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const response = await fetch(url);
    const user = await response.json() as GitHabUser | GitHabError;

    if (isGitHabUser(user)) {
        setUser(extractLocalUser(user));
    } else {
        setUser(null)
    }
  }

  return (
    <Container>
      <Header />
      <Search
        hasError={!user}
        onSubmit={fetchUser}
      />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;

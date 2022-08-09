import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <main className="welcome container">
      <p>Welcome</p>
      <Link to="login">Sing in</Link>
      <Link to="registration">Sign up</Link>
    </main>
  );
}

export default Welcome;

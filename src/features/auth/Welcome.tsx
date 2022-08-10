import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <main className="container h-screen flex align-middle items-center">
      <div className="container flex flex-col align-middle max-w-lg -mt-24">
        <h1 className="text-center">Welcome to Memo</h1>
        <div className="links flex justify-end space-x-4">
          {/* TODO think about orger sign up and sign in  */}
          <Link to="registration">Sign up</Link>
          <Link to="login">Sing in</Link>
        </div>
      </div>
    </main>
  );
}

export default Welcome;

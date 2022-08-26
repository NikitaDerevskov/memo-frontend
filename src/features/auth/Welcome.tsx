import { PrimaryLink } from "../utils/PrimaryLink";
import { SecondaryLink } from "../utils/SecondaryLink";

function Welcome() {
  return (
    <main className="container h-screen flex align-middle items-center">
      <div className="container flex flex-col align-middle max-w-lg -mt-24">
        <h1 className="text-center">Welcome to Memo</h1>
        <div className="links flex justify-end space-x-4 mt-5">
          {/* TODO think about orger sign up and sign in  */}
          <SecondaryLink to="registration" text="Sign up" />
          <PrimaryLink to="login" text="Sing in" />
        </div>
      </div>
    </main>
  );
}

export default Welcome;

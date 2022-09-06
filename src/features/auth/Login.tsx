import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../../common/api";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="container h-screen flex items-center">
      <div className="container space-y-4">
        <h1 className="text-center">Login</h1>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col space-y-4">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
          <PrimaryButton
            text="Sign in"
            onClick={() => {
              Api.login(email, password)
                .then(({ data }: { data: { token: string; name: string } }) => {
                  /* TODO work with Bearer */
                  /* TODO change to redux - just for fun */
                  sessionStorage.setItem("userName", data.name);
                  sessionStorage.setItem("token", `Bearer ${data.token}`);
                  navigate("/main");
                })
                .catch((e: any) => {
                  alert(e.response.data);
                });
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default Login;

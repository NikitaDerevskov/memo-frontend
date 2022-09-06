import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../../common/api";

function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      Registration
      <input
        placeholder="John"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          Api.registration(name, email, password)
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
      >
        Sign up
      </button>
    </div>
  );
}

export default Registration;

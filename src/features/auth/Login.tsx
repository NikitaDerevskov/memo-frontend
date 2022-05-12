import {
    useNavigate
} from "react-router-dom";
import {useState} from "react";
import {stringify} from "querystring";

function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            {'Login'}

            <input type="email" placeholder="Email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}/>

            <button onClick={() => {
                fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: new Headers({ 'content-type': 'application/json' }),
                    body:
                        JSON.stringify({
                            email,
                            password
                        })
                }).then(
                    (x) => {
                        console.log('success',x )
                    }
                ).catch((e) => console.log(e))
                console.log('success')
                // navigate("/main");
            }}>
                Sign in
            </button>
        </div>
    );
}

export default Login;
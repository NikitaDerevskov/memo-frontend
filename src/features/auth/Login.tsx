import {
    useNavigate
} from "react-router-dom";

function Login() {
    let navigate = useNavigate();

    return (
        <div className="login">
            {'Login'}

            <button onClick={() => {
                // TODO if fetch success
                navigate("/main");
            }}>
                Sign in
            </button>
        </div>
    );
}

export default Login;
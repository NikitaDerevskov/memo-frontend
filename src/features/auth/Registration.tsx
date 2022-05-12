import {useNavigate} from "react-router-dom";

function Registration() {
    let navigate = useNavigate();

    return (
        <div className="registration">
            {'Registration'}
            <button onClick={() => {
                // TODO if fetch success
                navigate("/main");
            }}>
                Sign up
            </button>
        </div>
    );
}

export default Registration;
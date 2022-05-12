import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome">
            {'Welcome'}
            <Link to="login" >Sing in</Link>
            <Link to="registration" >Sign up</Link>
        </div>
    );
}

export default Welcome;
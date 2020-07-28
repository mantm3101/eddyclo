import React from "react";
import {connect} from "react-redux"
import {callLogin} from "../../store/logic/login";
// import { Form, Field } from "react-final-form";

const Login = ({login}) => {
    const a = "abc";

    const submit = () => {
        login({
            email:"mantm3101@gmail.com",
            password:"eddyclo@2020"
        });
    }

    return (
        <>
            <div>
                <label>Username</label>
                <input type="text" />
            </div>
            <div>
                <label>Password</label>
                <input type="text" />
            </div>
            <button onClick={submit}>Login</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    login : (credential) => dispatch(callLogin(credential))
})

export default connect(null, mapDispatchToProps)(Login);

import React from "react";
import {connect} from "react-redux"
import {callLogin} from "../../store/logic/login";
import { Route, Redirect } from "react-router-dom";
// import { Form, Field } from "react-final-form";

const Form = ({submit}) => (
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

const Login = ({login, profile, ...rest}) => {

    const submit = () => {
        login({
            email:"mantm3101@gmail.com",
            password:"eddyclo@2020"
        });
    }

    console.log("Hello");

    return (
        <Route {...rest}
                render={ props => {
                    if(profile && profile.data){
                        return <Redirect to="/"/>
                    }else {
                        return <Form submit={submit}/>
                    }
                }}
        />
    )
}

const mapStateToProps = (state) => ({
    profile : state.profile.data
});

const mapDispatchToProps = (dispatch) => ({
    login : (credential) => dispatch(callLogin(credential))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

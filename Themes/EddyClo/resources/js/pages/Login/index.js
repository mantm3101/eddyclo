import React from "react";
import { connect } from "react-redux";
import { callLogin } from "../../store/logic/login";
import { Route, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";

const LoginForm = ({ login }) => {
    const onSubmit = values => {
        login({
            email: values.email,
            password: values.password
        });
    };

    const initialValues = {
        email: "",
        password: ""
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button disabled={submitting} type="submit">
                        Login
                    </button>
                </form>
            )}
        />
    );
};

const Login = ({ login, profile, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (profile.data) {
                    return <Redirect to="/" />;
                } else {
                    return <LoginForm login={login} />;
                }
            }}
        />
    );
};

const mapStateToProps = state => ({
    profile: state.profile
});

const mapDispatchToProps = dispatch => ({
    login: credential => dispatch(callLogin(credential))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

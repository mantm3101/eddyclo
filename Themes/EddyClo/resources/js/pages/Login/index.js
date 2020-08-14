import React from "react";
import { connect } from "react-redux";
import { callLogin } from "../../store/logic/login";
import { Route, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";

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
        <div>
            <Navbar />
            <div className="main">
                <Form
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    render={({ handleSubmit, submitting }) => (
                        <div className="col-sm-5 col-sm-offset-1 mb-sm-40">
                            <h4 class="font-alt">Login</h4>
                            <hr class="divider-w mb-10"></hr>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <Field
                                        className="form-control"
                                        name="email"
                                        component="input"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        className="form-control"
                                        name="password"
                                        component="input"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        className="btn btn-round btn-b"
                                        disabled={submitting}
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                />
            </div>
        </div>
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

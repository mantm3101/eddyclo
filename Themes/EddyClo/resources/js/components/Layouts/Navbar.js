import React from "react";
import { Link } from "react-router-dom";
import { HOME, SHOP, LOGIN } from "../../../constants/routes";
import { connect } from "react-redux";

const Profile = ({ profile }) => {
    return (
        <a>
            {profile.first_name} {profile.last_name}{" "}
            <i onClick classNameName="fa fa-sign-out"></i>
        </a>
    );
};

const Navbar = ({ profile }) => (
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button
                    className="navbar-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#custom-collapse"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to={HOME}>
                    EddyClo
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="custom-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <Link to={SHOP}>Shop</Link>
                    </li>
                    <li className="dropdown">
                        {profile ? (
                            <Profile profile={profile} />
                        ) : (
                            <Link to={LOGIN}>Login</Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

const mapStateToProps = state => ({
    profile: state.profile.data
});

export default connect(mapStateToProps)(Navbar);

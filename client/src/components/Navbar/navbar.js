import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import SignUpModal from "../Sign-up/index";
import LoginModal from "../Login/index"

class Navbar extends Component {

    signUpModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }

    onSignUpClick = () => {
        this.showModal();
    }

    loginModalRef = ({handleShow}) => {
        this.showLogin = handleShow
    }

    onLoginClick = () => {
        this.showLogin();
    }

    render() {
        return (
            <div className="menu">
                <SignUpModal ref={this.signUpModalRef}></SignUpModal>
                <LoginModal ref={this.loginModalRef}></LoginModal>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbarText navbar-brand" to="/">LocalLab</Link>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <Button onClick={this.onSignUpClick}>Sign Up</Button>
                    <Button onClick={this.onLoginClick}>Login</Button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                {/* <Link
                                    to="/"
                                    className={
                                        window.location.pathname === "/"
                                    }
                                >
                                    Login
                </Link> */}
                            </li>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }

}

export default Navbar;
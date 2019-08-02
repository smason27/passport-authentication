import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import axios from "axios";
import {Redirect} from "react-router";

class LoginModal extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            username: "",
            password: "",
            show: false,
            redirect: null
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleShow = event => {
        this.setState({ show: true })
    }
    handleClose = event => {
        this.setState({ show: false })
    }

       handleSubmit = event => {
        event.preventDefault();
        axios.post("/api/login", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log(response);
            !response.data.err ? 
            this.setState({ 
                redirect: true
            }) :
            console.log(`${this.state.username} or ${this.state.password} is incorrect`)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const  {redirect} = this.state;

        if(redirect) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}
                    size="md"
                    // aria-labelledby="contained-modal-title-vcenter"
                    // centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Login                            
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    type="userName"
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleChange}
                                    placeholder="Enter Username" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>   
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleChange}
                                    placeholder="Password" />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Login
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
    }
    export default LoginModal

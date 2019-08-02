import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import axios from "axios";
import {Redirect} from "react-router"

class SignUpModal extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            username: "",
            email: "",
            password: "",
            show: false,
            redirect: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post("/api/", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response)
            !response.data.err ? 
            this.setState({ 
                redirect: true
            }) :
            console.log(`account already exists`)
        }).catch(error => {
            console.log(error)
        })
    
}

handleShow = event => {
    this.setState({ show: true })
}
handleClose = event => {
    this.setState({ show: false })
}
render() {
    const  {redirect} = this.state;

    if(redirect) {
        return <Redirect to="/newProfile"/>
    }

    return (
        <div>
            <Modal show={this.state.show} onHide={this.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Register here for Locallob to start networking with like minded local business owners.
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
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else, but we might.
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
                            Sign Up
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
export default SignUpModal

// class SignUp extends Component {
//     Constructor() {


//     }

//     render() {
//         return (
//             <div>
//                 <div class="modal fade" show={this.state.show} onHide={this.handleClose} id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">Sign-Up to Locallab</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                 <div className="SignupForm">

//                                     <form className="form-horizontal">
//                                         <div className="form-group">
//                                             <div className="col-1 col-ml-auto">
//                                                 <label className="form-label" htmlFor="username">Username</label>
//                                             </div>
//                                             <div className="col-3 col-mr-auto">
//                                                 <input className="form-input"
//                                                     type="text"
//                                                     id="username"
//                                                     name="username"
//                                                     placeholder="Username"
//                                                     value={this.state.username}
//                                                     onChange={this.handleChange}

//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <div className="col-1 col-ml-auto">
//                                                 <label className="form-label" htmlFor="password">Password: </label>
//                                             </div>
//                                             <div className="col-3 col-mr-auto">
//                                                 <input className="form-input"
//                                                     placeholder="password"
//                                                     type="password"
//                                                     name="password"
//                                                     value={this.state.password}
//                                                     onChange={this.handleChange}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="form-group ">
//                                             <div className="col-7"></div>
//                                             <button
//                                                 className="btn btn-primary col-1 col-mr-auto"
//                                                 onClick={this.handleSubmit}
//                                                 type="submit"
//                                             >Sign up</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div class="modal-footer">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )

//     }
// }



// export default SignUp;
import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="sect">Contact US</h2>
                <div className="row">
                    <div className="col-md-6">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control placeholder="Your Querry" />
                            </Form.Group>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control placeholder="enter 10 digit mobile number" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                    <div className="col-md-6  text-center">
                        <ul className="list-unstyled  mb-0">
                            <li>
                                <FontAwesomeIcon icon={faHome} />
                                <p className="contact-data">Gurgaon, Dlf 94126, India</p>
                            </li>

                            <li> <FontAwesomeIcon icon={faPhone} />
                                <p className="contact-data">+ 91 9634 837213</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className="contact-data">ak@techSmart.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>)
    }
}
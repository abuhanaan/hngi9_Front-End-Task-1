import React from 'react'
import { Button, Card, Container, Form, Alert } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik'


export default function Contact() {
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            message: "",
            agree: false
        },
        validationSchema: Yup.object({
            first_name: Yup.string().max(15, "Has to be 15 Characters or less").required("Required"),
            last_name: Yup.string().max(15, "Has to be 15 charasters or less").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            message: Yup.string().max(200, "Must be 200 characters or less").required("Required"),
            agree: Yup.bool('Must not be left unchecked')
        }),
        onSubmit: (values) => {
            console.log(values)
        }

    })
    console.log(formik.values)
    return (
        <div>
        <Container>
            
                <div>
                    <h5>Contact Me</h5>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <div>
                    <Form noValidate validated={formik.validated} onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name='first_name'
                                          value={formik.values.first_name} 
                                          type="text" 
                                          placeholder="Enter your First Name"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur} />
                            {formik.touched.first_name && formik.errors.first_name ? <Alert variant='danger'>{formik.errors.first_name}</Alert> : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name='last_name' 
                                          type="text" 
                                          value={formik.values.last_name}
                                          placeholder="Enter your Last Name"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur} />
                            {formik.touched.last_name && formik.errors.last_name ? <Alert variant='danger'>{formik.errors.last_name}</Alert> : null}
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email'
                                          name='email' 
                                          placeholder="yourname@emal.com"
                                          value={formik.values.email}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? <Alert variant='danger'>{formik.errors.email}</Alert> : null}
                        </Form.Group>
                    </Row>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control value={formik.values.message}
                                          as='textarea'
                                          style={{height: '132px'}}
                                          name='message'
                                          placeholder="Send me a message and I'll reply you as soon as possible..."
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur} />
                                {formik.touched.message && formik.errors.message ? <Alert variant='danger'>{formik.errors.message}</Alert> : null}
                            </Form.Group>
                            <Form.Group className="mb-3" id="agree">
                                <Form.Check type="checkbox"
                                            label="You agree to providing your data to {name} who may contact you."
                                            value={formik.values.agree}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name='agree' />
                                {formik.touched.agree && formik.errors.agree ? <Alert variant='danger'>{formik.errors.agree}</Alert> : null}
                            </Form.Group>
                    </Form>

                    <Button id='btn__submit' variant="primary" type="submit" className='w-100'>
                        Submit
                    </Button>
                </div>
            
        </Container>
        </div>
    )
    }

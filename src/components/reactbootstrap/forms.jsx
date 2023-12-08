import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

export default function Forms() {
    return (
        <div className='container-md'>
            {/* <form action="">
            <label className='form-label'>Username</label>
            <input className='form-control' type="text" />
            <label className='form-label'>Password</label>
            <input className='form-control' type="text" />
            <button className='btn btn-primary'>Submit</button>
        </form> */}
            <Container sm>
                <Form>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' />
                    c++<Form.Check />
                    <Button variant='dark'>Submit</Button>
                </Form>
            </Container>

        </div>
    )
}

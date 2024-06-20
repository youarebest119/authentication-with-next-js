"use client";
import { useRouter } from 'next/navigation';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Cookies from "js-cookie";
import { useState } from 'react';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const handleLogin = () => {
        if (!name) {
            return toast.error("No name provided");
        }
        Cookies.set("auth", name)
        toast.success("User Logged in");
        router.push("/dashboard");
    }
    return (
        <>
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <Container>
                    <Row>
                        <Col className="mx-auto" md={5}>
                            <Card>
                                <Card.Header className='py-3 px-4'>
                                    <Card.Title className='mb-0'>
                                        Login
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className='p-4'>
                                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
                                    <Button onClick={handleLogin} type="button" className='w-100 mt-3'>
                                        Submit
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LoginPage

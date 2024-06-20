import Link from 'next/link'
import React, { ReactNode } from 'react'
import { Container } from 'react-bootstrap'

const layout = ({ children }: { children?: ReactNode }) => {
    return (
        <>
            <Container>
                <div className="d-flex gap-3 mb-5 w-100">
                    <Link
                        href="/auth/login"
                    >
                        Login
                    </Link>
                    <Link
                        href="/auth/contact"
                    >
                        Contact
                    </Link>
                </div>
                {children}
            </Container>
        </>
    )
}

export default layout

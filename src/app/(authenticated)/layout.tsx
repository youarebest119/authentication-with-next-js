import Link from 'next/link'
import { ReactNode } from 'react'
import { Container } from 'react-bootstrap'

const layout = ({ children }: { children?: ReactNode }) => {
    return (
        <>
            <Container>
                <div className="d-flex gap-3 mb-5 w-100">
                    <Link
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/settings"
                    >
                        Settings
                    </Link>
                </div>
                {children}
            </Container>
        </>
    )
}

export default layout

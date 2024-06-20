"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from 'react-bootstrap'
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove("auth");
        router.push("/auth/login");
        toast.success("User logged Out");
    }
    return (
        <div>
            <h2>Dashboard Page</h2>
            <p>You can access this page only if you are logged in.</p>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Dashboard

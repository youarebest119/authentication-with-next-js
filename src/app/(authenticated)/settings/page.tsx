"use client";
import React from 'react'
import Cookies from 'js-cookie';

const Settings = () => {
    const name = Cookies.get("auth");
    return (
        <div>
            <h2>Settings Page</h2>
            <p>Your Name - {name}</p>
            <p>Note - You can only access this page if you are logged in.</p>
        </div>
    )
}

export default Settings

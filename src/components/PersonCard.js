import React, { useState } from 'react'

const PersonCard = (props)=> {
    const { firstName, lastName, email, password, confirmPassword } = props
    
    return(
        <div>
            <h2>Your Form Data</h2>
            <ul>
                <li>First Name: { firstName }</li>
                <li>Last Name: { lastName }</li>
                <li>Email: { email }</li>
                <li>Password: { password }</li>
                <li>Confirm Password: { confirmPassword }</li>
            </ul>
        </div>
    )
}

export default PersonCard
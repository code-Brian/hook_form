import React, { useState } from 'react'

const UserForm = (props)=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e)=> {
        // this synthetic event prevents the page from refreshing on form submission
        email.preventDefault()

        const newUser = { firstName, lastName, email, password, confirmPassword }
        console.log(`Welcome, ${firstName}!`)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e)=> setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e)=> setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)}></input>
            </div>
        </form>
    )
}

export default UserForm
import React from 'react'

const Results = (props) =>{
    const {firstname, lastname, email, password, confpassword} = props.data;
    return(
        <div>
            <h2>Form Results</h2>
            <p>First Name: {firstname} </p>
            <p>Last Name:{lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confpassword}</p>
        </div>
    )
}

export default Results;
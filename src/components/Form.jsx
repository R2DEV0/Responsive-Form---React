import React from 'react';


const UserForm = (props) => {
    const{inputs, setInputs} = props;


    const onChange = e => {
        setInputs({
            ...inputs,
        [e.target.name]: e.target.value
        });
    };


    return(
        <form>
            <div>
                <label htmlFor='firstname'>First Name:</label>
                <input type='text' name='firstname' onChange ={onChange} />
            </div>
            <div>
                <label htmlFor='lastname'>Last Name:</label>
                <input type='text' name ='lastname' onChange ={onChange}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='text' name='email'  onChange ={onChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' onChange ={onChange}/>
            </div>
            <div>
                <label htmlFor= 'confpassword'>Confirm Password:</label>
                <input type='password' name ='confpassword' onChange ={onChange} />
            </div>
        </form>
    );
};

export default UserForm;
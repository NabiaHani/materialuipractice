import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
// import { Password } from '@mui/icons-material'

const Form = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    // handling change
    const handleChange = (e) => {
        // setInputs(e.target.value)
        const { name, value } = e.target
        setInputs(preState => ({
            ...preState,
            [name]: value
        }))
    }

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        alert('your form is submitted')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField name='name' type='name' label='name' variant='outlined' placeholder='Enter your name' value={inputs.name || ''} onChange={handleChange} sx={{ margin: "20px" }} InputLabelProps={{
                    shrink: true,
                }} required />

                <TextField name='email' type='email' label='email' variant='outlined' placeholder='Enter your email' value={inputs.email || ''} onChange={handleChange} sx={{ margin: "20px" }} required />

                <TextField name='password' type='password' label='password' variant='outlined' placeholder='Enter your password' value={inputs.password || ''} onChange={handleChange} sx={{ margin: "20px" }} required />
                <br />
                <Button type='submit'>Submit</Button>
            </form>
        </>
    )
}

export default Form

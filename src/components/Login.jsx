import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {



    const { register, handleSubmit, watch } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(watch("example"))
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </>
    )
}

export default Login
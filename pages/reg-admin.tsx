import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function Register_admin() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const router = useRouter()

    const inputName = (e: any) => {
        setName(e.target.value)
    }

    const inputEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const inputPassword = (e: any) => {
        setPassword(e.target.value)
    }

    const inputImage = (e: any) => {
        const file = e.target.files[0];
        setImage(file)
    }

    const Register = async () => {
        const role_id = '1';
        const position = 'admin';
        const body = new FormData();
        body.append("name", name);
        body.append("email", email);
        body.append("role_id", role_id);
        body.append("password", password);
        body.append("file", image);
        body.append("position", position);
        axios({
            method: "POST",
            url: `${process.env.URL}/users/upload/coba`,
            data: body,
            headers: { 'Content-type': 'multipart/form-data; boundary=file' }
        }).then((res) => {
            alert('pendaftaran berhasil');
            router.push(`/`);
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <Head>
            <title>NextJS Basic | Registrasi Admin</title>
                <meta name="description" content="Website NextJS Basic" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </Head>
            <div className="container">
                <div className="row col-5 m-auto mt-5">
                    <input onChange={inputName} className="text-center p-2 mt-3" type="text" placeholder="Nama" />
                    <input onChange={inputEmail} className="text-center p-2 mt-3" type="text" placeholder="Email" />
                    <input onChange={inputPassword} className="text-center p-2 mt-3" type="text" placeholder="Password" />
                    <div className="d-flex align-items-center mt-3">
                        <p className="m-0">Photo : </p>
                        <input onChange={inputImage} className="text-center p-2" type="file" />
                    </div>
                    <button onClick={Register} className="p-2 mt-3">Register</button>
                </div>
            </div>
        </>
    )
}

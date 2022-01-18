import axios from "axios";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookie from "js-cookie";

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState('');

  useEffect(() => {
    Cookie.set("rememberMe", rememberMe);
  }, [rememberMe]);

  const inputEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const inputPassword = (e: any) => {
    setPassword(e.target.value)
  }

  const Login = async () => {
    const body = new URLSearchParams();
    body.append("email", email);
    body.append("password", password);
    axios({
      method: "POST",
      url: `${process.env.URL}/users/login`,
      data: body,
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }).then((res) => {
      if (res.data.status == 200) {
        setRememberMe(res.data.response.token)
        alert('Login success')
      router.push('/home')
      } else {
        alert('Password salah')
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <title>NextJS Basic | Login</title>
        <meta name="description" content="Website NextJS Basic" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
      <div className="container">
        <div className="row col-5 m-auto mt-5">
          <input onChange={inputEmail} className="text-center p-2 mt-3" type="text" placeholder="email" />
          <input onChange={inputPassword} className="text-center p-2 mt-3" type="text" placeholder="password" />
          <button onClick={Login} className="p-2 mt-3">Login</button>
          <button onClick={() => router.push(`/reg-admin`)} className="p-2 mt-3">Register Admin</button>
          <button onClick={() => router.push(`/reg-member`)} className="p-2 mt-3">Register Member</button>
        </div>
      </div>
    </>
  )
}
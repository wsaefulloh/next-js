import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css"
import Cookie from "js-cookie";

export default function Header() {
  const router = useRouter()
  
  const logOut = () => {
    Cookie.remove('rememberMe')
    router.push(`/`)
  }

  const profile = () => {
    const token = Cookie.get('rememberMe')
    const token_new = token?.toString().length
    if (token_new == 0) {
      alert('login dulu')
      router.push(`/`)
    } else {
      router.push(`/profile`)
    }
  }

  return (
    <nav className="bg-light shadow-sm fixed-top navbar">
      <div className="container justify-content-between align-items-center">
        <h4 onClick={() => router.push(`/home`)} className="mt-2 mb-2">Title Website</h4>
        <div className="d-flex align-content-center">
          <p onClick={profile} className="m-0">Profile</p>
          <p onClick={logOut} className="m-0 ms-3">Logout</p>
        </div>
      </div>
    </nav>
  )
}

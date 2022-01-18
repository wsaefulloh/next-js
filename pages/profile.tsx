import axios from "axios";
import Layout from "../components/Layout/layout";
import Cookie from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const [role_id, setRole_id] = useState('')
    const [role, setRole] = useState('')
    const [photo, setPhoto] = useState('')
    const [new_photo, setNewPhoto] = useState('')
    const [new_password, setNew] = useState('')
    const [old_password, setOld] = useState('')
    const mountedRef = useRef(true)

    const GetData = async (token: any) => {
        axios({
            method: "GET",
            url: `${process.env.URL}/users/search/detail/profile`,
            headers: { 'token': `${token}` }
        }).then((res) => {
            setId(res.data.response.id)
            setName(res.data.response.name)
            setEmail(res.data.response.email)
            setPosition(res.data.response.position)
            setRole(res.data.response.role.name_role)
            setRole_id(res.data.response.role.id)
            setPhoto(res.data.response.photo)
        }).catch((err) => {
            console.log(err)
        })
    }

    const UpdateData = async () => {
        const body = new FormData();
        body.append("name", name);
        body.append("email", email);
        body.append("role_id", role_id);
        body.append("password", old_password);
        body.append("file", new_photo);
        body.append("position", position);
        body.append("password_baru", new_password);
        const token = Cookie.get('rememberMe')?.toString();
        axios({
            method: "PUT",
            url: `${process.env.URL}/users/${id}`,
            data: body,
            headers: { 'token': `${token}` }
        }).then((res) => {
            alert('update berhasil')
            console.log(res)
            router.reload
        }).catch((err) => {
            console.log(err)
        })
    }

    const DeleteData = async () => {
        const token = Cookie.get('rememberMe');
        axios({
            method: "DELETE",
            url: `${process.env.URL}/users/${id}`,
            headers: { 'token': `${token}` }
        }).then((res) => {
            alert('delete data berhasil')
            Cookie.remove('rememberMe');
            router.push('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    const inputName = (e: any) => {
        setName(e.target.value)
    }

    const inputEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const inputOldPassword = (e: any) => {
        setOld(e.target.value)
    }

    const inputNewPassword = (e: any) => {
        setNew(e.target.value)
    }

    const inputPosition = (e: any) => {
        setPosition(e.target.value)
    }

    const inputImage = (e: any) => {
        const file = e.target.files[0];
        setNewPhoto(file)
    }

    useEffect(() => {
        const token = Cookie.get('rememberMe');
        GetData(token)
        return () => { mountedRef.current = false }
    },[]);

    return (
        <Layout pageTitle='Blog Page'>
            <div className="d-flex">
                <div className="col-4">
                    <img src={`${photo}`} alt="" width={300} height={300} />
                </div>
                <div className="col mt-5">
                    <h2 className="mb-4">Your Profile</h2>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Name</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input onChange={inputName} className="col-8 ps-2" type="text" placeholder={`${name}`} />
                        </div>
                    </div>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Email</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input onChange={inputEmail} className="col-8 ps-2" type="text" placeholder={`${email}`} />
                        </div>
                    </div>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Password Lama</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input onChange={inputOldPassword} className="col-8" type="text" />
                        </div>
                    </div>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Password Baru</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input onChange={inputNewPassword} className="col-8" type="text" />
                        </div>
                    </div>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Position</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input onChange={inputPosition} className="col-8 ps-2" type="text" placeholder={`${position}`} />
                        </div>
                    </div>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Role</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input className="col-8 ps-2" type="text" placeholder={`${role}`} readOnly />
                        </div>
                    </div>
                    <div className="row align-content-center mt-3">
                        <div className="col-3">
                            <p className="m-0">Photo</p>
                        </div>
                        <div className="col-1">
                            <p className="m-0">:</p>
                        </div>
                        <div className="col">
                            <input onChange={inputImage} className="col-8" type="file" />
                        </div>
                    </div>
                    <button onClick={UpdateData} className="mt-3">Update</button>
                    <button onClick={DeleteData} className="mt-3 ms-3">Delete User</button>
                </div>
            </div>
        </Layout>
    )
}
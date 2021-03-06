import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Auth.module.css'
import logo from '../src/assets/imgs/logo.jpeg'
import {LockClosedIcon, LoginIcon, UserIcon} from '@heroicons/react/outline'
import { useStateValue } from '../src/state_manger/contextApi'
import { USER_LOGIN } from '../src/state_manger/constants'
import { useRouter } from 'next/router'
import axiosInstance from '../src/state_manger/axios'

const Auth = () => {
    const userObj = {
        username : "",
        password : ""
    }
    const [userData, setUserData] = useState(userObj);
    const {dispatch, state} = useStateValue();
    const {user} = state;
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState<boolean>(true)


    useEffect(()=>{
        if(user){
            router.push("/")
        }

        const localToken = localStorage.getItem("token");
        if(!localToken){
            setPageLoading(false);
            return;
        }

        
    },[user,router]);



    const handleUserChange = (e:any)=>{
        let {name,value} = e.target;
        setUserData({...userData, [name] : value});
    }


    const handleUserSubmit = async(e:any)=>{
        e.preventDefault();
        await axiosInstance.post("/auth",userData).then((res : any) => {
            const data = res.data;

            if(!data.data){
                alert(data.msg);
                return;
            }

            if(data.data){
                dispatch({type : USER_LOGIN, payload : data.data})

                localStorage.setItem("user",JSON.stringify(data.data))
            }
            
        }).catch((err:any)=> {console.log(err); setPageLoading(false)})
        
    }



    if(pageLoading) return <div className='containerGrid'>Loading...</div>

    return (
        <div className={`containerGrid ${styles.auth}`}>
            <Head>
                <title>Talk Your Mind - Auth</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* AUTH TOP */}
            <div className={`containerFlex ${styles.auth_top}`}>
                <div className={`${styles.logo}`}>
                    <Image src={logo} objectFit = "fill" alt='logo' />
                </div>
            </div>



            {/* AUTH BOTTOM */}
            <div className={`containerFlex ${styles.auth_bottom}`}>
                <form onSubmit={handleUserSubmit}>
                    <div className={`containerFlex ${styles.input_tile}`}>
                        <div>
                            <UserIcon className={`${styles.icon}`}/>
                        </div>
                        <input type="text" value={userData.username} name = "username" onChange={handleUserChange}  placeholder='username' />
                    </div>

                    <div className={`containerFlex ${styles.input_tile}`}>
                        <div className={`${styles.icon}`}>
                            <LockClosedIcon/>
                        </div>
                        <input type="password" value={userData.password} name = "password" onChange={handleUserChange} placeholder='password' />
                    </div>
                    <button className={`containerFlex`}>
                        <div className='containerFlex' >
                            Submit
                            <LoginIcon className={`${styles.icon}`}/>
                        </div>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Auth
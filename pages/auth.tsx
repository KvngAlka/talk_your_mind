import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Auth.module.css'
import logo from '../src/assets/imgs/logo.jpeg'
import {LockClosedIcon, LoginIcon, UserIcon} from '@heroicons/react/outline'

const Auth = () => {
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
                <Image src={logo} objectFit = "fill"/>
            </div>
        </div>



        {/* AUTH BOTTOM */}
        <div className={`containerFlex ${styles.auth_bottom}`}>
            <form action="">
                <div className={`containerFlex ${styles.input_tile}`}>
                    <div>
                        <UserIcon className={`${styles.icon}`}/>
                    </div>
                    <input type="text" placeholder='username' />
                </div>

                <div className={`containerFlex ${styles.input_tile}`}>
                    <div className={`${styles.icon}`}>
                        <LockClosedIcon/>
                    </div>
                    <input type="text" placeholder='password' />
                </div>
                <button className={`containerFlex`}>
                    <div className='containerFlex'>
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
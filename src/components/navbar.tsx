import { Avatar } from '@mui/material'
import React from 'react'
import styles from '../../styles/Navbar.module.css'
import {BellIcon, ChevronDownIcon, InformationCircleIcon} from '@heroicons/react/outline'
import { useStateValue } from '../state_manger/contextApi'
import { USER_LOGOUT } from '../state_manger/constants'

export const Navbar = () => {

    const {dispatch} = useStateValue();


  return (
    <div className={`containerFlex ${styles.navbar}`}>

        <div className={`containerFlex ${styles.h_n_cont}`}>
            <div className={`${styles.help_icon}`}>
                <InformationCircleIcon/>
            </div>

            <div className={`${styles.notify_icon}`}>
                <BellIcon/>
            </div>
        </div>
        <div className={`containerFlex ${styles.profile_cont}`}>
            <Avatar className={`${styles.avatar}`}/>
            <div className={`containerFlex `}>
                <h4>
                    {"Admin"}
                </h4>
                <div title='Logout' onClick={()=>{dispatch({type : USER_LOGOUT}); localStorage.removeItem("user")}} className={`${styles.arrow_down_icon_cont}`} style = {{marginLeft : "10px", cursor : "pointer"}}>
                    <ChevronDownIcon/>
                </div>
                
            </div>
        </div>

    </div>
  )
}

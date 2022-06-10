import { Avatar } from '@mui/material'
import React from 'react'
import styles from '../../styles/Navbar.module.css'
import {BellIcon, ChevronDownIcon, InformationCircleIcon} from '@heroicons/react/outline'

export const Navbar = () => {
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
                    {"Eddie"}
                </h4>
                <div className={`${styles.arrow_down_icon_cont}`}>
                    <ChevronDownIcon/>
                </div>
                
            </div>
        </div>

    </div>
  )
}

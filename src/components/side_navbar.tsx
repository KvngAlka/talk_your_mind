import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/SideNavbar.module.css'
import logo from '../assets/imgs/logo.jpeg'
import ListRoutes from './sidebar_navs';

function SideNavbar() {
  return (
    <div className={`${styles.side_navbar}`}>
        {/* TOP */}
        <div className={` containerFlex ${styles.top}`}>
            {/* LOGO */}
            <div className={`${styles.logo}`}>
                <div className={styles.logo_frame}>
                    <Image src={logo} objectFit='fill' alt='' />
                </div>
            </div>
            {/* MENU BUTTON */}
            <div className={`${styles.menu} containerFlex`}>
                <div className={`${styles.menu_cont} containerGrid`}>
                    <MenuIcon/>
                </div>
            </div>

        </div>


        {/* SEARCH */}
        <div className={`containerFlex ${styles.search_cont}`}>
            <input type="text" placeholder='Search Module' />
            <SearchIcon className={styles.search_icon}/>
        </div>

        {/* NAVIGATIONS */}

        <div className={`${styles.navigation}`}>
            <ListRoutes/>
        </div>

    </div>
  )
}

export default SideNavbar
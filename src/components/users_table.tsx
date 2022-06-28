import React, { useEffect, useState } from 'react'
import styles from '../../styles/UsersTable.module.css'
import axiosInstance from '../state_manger/axios'
import { Loading2 } from './loading';

const UsersTable = () => {

    const [users,setUsers] = useState<any[] | null>(null);
    const [dataLoading, setDataLoading] = useState<boolean>(true)

    useEffect(()=>{
        let getUsers = async()=>{
            await axiosInstance.get("/users").then((res : any)=>{
                setUsers([...res.data]);
                setDataLoading(false)
            }).catch((err : any)=> {console.log(err); setDataLoading(false)})
        }

        !users && getUsers();
    },[users])


    if(dataLoading) return <Loading2/>

  return (
    <div className='table_cont'>
        <table className={styles.users_table}>
            <thead>
                <tr>
                    <th>
                        Login
                    </th>
                    <th>
                        Real Name
                    </th>
                    <th>
                        Group
                    </th>
                    <th>
                        Extension
                    </th>
                </tr>
            </thead>

            <tbody>


                {

                    users?.map((user : any, i : number)=> {
                        return (
                            <tr key={i}>
                                <td style ={{color : '#666699'}}>
                                    {user.name}
                                </td>
                                <td>
                                    {user.realName}
                                </td>
                                <td>
                                    {user.group}
                                </td>
                                <td>
                                    {user.extension || 'No extension associated'}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>

    </div>
  )
}

export default UsersTable
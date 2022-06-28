import React, { useEffect, useState } from 'react'
import styles from '../../styles/UsersTable.module.css'
import axiosInstance from '../state_manger/axios'
import { Loading2 } from './loading'

const ReportsTable = () => {

    const [cdrs,setCdrs] = useState<any[] | null>(null)
    const [dataLoading, setDataLoading] = useState<boolean>(true)

    useEffect(()=>{
        let getUsers = async()=>{
            await axiosInstance.get("/cdrs").then((res : any)=>{
                setCdrs([...res.data]);
                setDataLoading(false)

            }).catch((err : any)=> {console.log(err); setDataLoading(false)})
        }

        !cdrs && getUsers();
    },[cdrs])

    if(dataLoading) return <Loading2/>

  return (
    <div className='table_cont'>
        <table className={styles.users_table}>
            <thead>
                <tr>
                    <th>
                        Data
                    </th>
                    <th>
                        Source
                    </th>
                    <th>
                        Destination
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Duration
                    </th>
                </tr>
            </thead>

            <tbody>


                {
                    cdrs?.map((cdr : any, i : number)=> {
                        return (
                            <tr key={i}>
                                <td>
                                    {cdr.date}
                                </td>
                                <td>
                                    {cdr.source}
                                </td>
                                <td>
                                    {cdr.destination}
                                </td>
                                <td  style={{color : cdr.status === "ANSWERED" ? 'green' : 'red'}}>
                                    {cdr.status}
                                </td>
                                <td>
                                    {cdr.duration}
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

export default ReportsTable
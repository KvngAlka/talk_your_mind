import React, { useState } from 'react'
import styles from '../../styles/UsersTable.module.css'

const UsersTable = () => {
    const initUser = {
        login : "Eddie",
        realName : "Eddie",
        group : "Mental Health Consultant",
        extension : "None"
    }
    const [users,setUsers] = useState<any[]>([initUser])
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
                <tr>
                    <td>
                        Eddie
                    </td>
                    <td>
                        Eddie
                    </td>
                    <td>
                        Mental Health Consultant
                    </td>
                    <td>
                        None
                    </td>
                </tr>


                {
                    users?.map((user : any, i : number)=> {
                        return (
                            <tr>
                                <td>
                                    {user.login}
                                </td>
                                <td>
                                    {user.realName}
                                </td>
                                <td>
                                    {user.group}
                                </td>
                                <td>
                                    {user.extension}
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
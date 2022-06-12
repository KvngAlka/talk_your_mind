import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='loading containerGrid'  style={{width : "100%", height : "100vh", placeItems : "center"}}>
        <CircularProgress style={{color : "var(--primeCol)", }}/>
    </div>
  )
}

export default Loading
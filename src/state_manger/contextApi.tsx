import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import Auth from '../../pages/auth';
import Loading from '../components/loading';
import { initialState, reducer } from './reducer'


interface DataContextInterface {
  state : any,
  dispatch : React.Dispatch<any>
}
const DataContext = createContext({state : {user : null}} as DataContextInterface)

const DataProvider : React.FC<{children: any}> = ({children}) => {

  const [state, dispatch] = useReducer(reducer,initialState);
  const [pageLoading , setPageLoading] = useState(true);

  const router = useRouter();

  useEffect(()=>{
    let {user} = state;
    if(!user){
      router.push("/auth");
      setPageLoading(false);
    }else{
      setPageLoading(false)
    }
  },[])


  if(pageLoading) return <Loading/>

  return (
    <DataContext.Provider value={{state,dispatch}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;



export const useStateValue = ()=> useContext(DataContext);
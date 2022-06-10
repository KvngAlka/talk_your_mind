import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from './reducer'


const DataContext = createContext<{state : any ,dispatch : React.Dispatch<any>} | any>({})

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


  if(pageLoading) return <div className='containerGrid'>Loading...</div>

  return (
    <DataContext.Provider value={{state,dispatch}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;



export const useStateValue = ()=> useContext(DataContext);
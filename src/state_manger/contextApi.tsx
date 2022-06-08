import React, { createContext, useContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'


const DataContext = createContext({})

const DataProvider : React.FC<{children: any}> = ({children}) => {

    const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <DataContext.Provider value={{state,dispatch}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;



export const useStateValue = ()=> useContext(DataContext);
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: [
     
    ]


}

//Create context
export const GlobalContext = createContext();

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransactions(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function AddTransactions(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return (<GlobalContext.Provider value={{transactions:state.transactions,deleteTransactions,AddTransactions}}>
        {children}
    </GlobalContext.Provider>)
}
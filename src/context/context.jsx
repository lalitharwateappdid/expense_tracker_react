import {createContext, React, useReducer} from "react"

// reducer
import ContextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions,dispatch] = useReducer(ContextReducer,initialState)

    const deleteTransaction  = (id) => dispatch({type:"DELETE_TRANSACTION",payload:id})
    // const addTransaction = (transaction) => dispatch({type:"ADD_TRANSACTION", payload:})

    return (
        <ExpenseTrackerContext.Provider value={{appName:"Hello world"}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
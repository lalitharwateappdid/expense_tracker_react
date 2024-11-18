import {createContext, React, useReducer} from "react"

// reducer
import ContextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
   
    const [transactions,dispatch] = useReducer(ContextReducer,initialState)

    // actions
    const deleteTransaction = (id) => {
        dispatch({type: "DELETE_TRANSACTION", payload:id})
    }

    const addTransaction = (transaction) => {
        dispatch({type:"ADD_TRANSACTION", payload:transaction})
    }

    // console.log(transactions)



    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
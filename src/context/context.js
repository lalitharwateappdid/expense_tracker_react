import {createContext, React, useContext} from "react"

const initialState = [];

const ExpenseTrackerContext = createContext(initialState)

// export const Provider 
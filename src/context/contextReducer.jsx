const ContextReducer = (state,action) => {
    switch(action.type){
        case "DELETE_TRANSACTION":
            const transactions = state.filter((t) => t.id !== action.payload)
            return transactions;

        // case "ADD_TRANSACTION":
        //     const 
        
        default:
            return state;
    }

    
}


export default ContextReducer
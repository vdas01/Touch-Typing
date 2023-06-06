import { createContext, useReducer } from "react";

let INITIAL_STATE = {
    stored_arr :[]
}

export const StoreContext = createContext(INITIAL_STATE);

const StoreReducer = (state,action) =>{
    switch(action.type){
       case "SAVED":
        return {
           ...state,
           stored_arr: state.stored_arr.concat({
            correct_keysr:action.payload.correct.current,
            wrong_keysr: action.payload.wrong.current,
            speedr: action.payload.speed,
            acurracyr:action.payload.accuracy,
            duration:(action.payload.duration/60)
           })
        }
        case "CLEAR":
            return {
                state: []
            }
        default:
            return state;
    }
}
//useState([])
export const StoreContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(StoreReducer,INITIAL_STATE);

 
 
    return (
        <StoreContext.Provider value={{stored_arr: state.stored_arr,dispatch}}>
        {children}
        </StoreContext.Provider>
    )

}

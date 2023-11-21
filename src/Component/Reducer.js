const initialState = []

export const reducer = (state = initialState,action)=>{
    if(action.type == 'addData'){
        return action.payload
    }
    return state
}
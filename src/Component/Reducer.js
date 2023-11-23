const initialState = {
    data:[],
    loggedIn: false
}

export const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'addData':
            return action.payload
        case 'log_in':
            return {...state, loggedIn: true}
        case 'log_out':
            return {...state, loggedIn: false}
        default:
            return state
    }
}
const cityReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOC':
            return { ...state, currentCity: action.payload }
        default:
            return state
    }
}

export default cityReducer;
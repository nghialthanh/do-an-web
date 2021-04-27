const initialState = {
    acc: {
        userName: '',
        password: '',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    },
}


const LoginReducers = (state = initialState,action) => {
    switch(action.type) {
        case 'SET-ACCOUNT': {
            const newstate = action.payload;
            return {
                ...state,
                acc: newstate,
            };
        }
        default:
            return state;
    }
}
export default LoginReducers;
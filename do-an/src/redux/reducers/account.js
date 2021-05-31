const initialState = {
    acc: {
        address: "",
        birthday: "",
        departmentId: 0,
        email: "",
        firstName: "",
        lastName: "",
        level: 0,
        phoneNumber: "",
        sex: false,
        studentId: "",
        token: ""
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
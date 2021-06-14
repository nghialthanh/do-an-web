
export const setLogin = (Show) => {
    return {
        type: 'SET-ACCOUNT',
        payload: Show,
    }
}
export const setTestID = (s) => {
    return {
        type: 'SET-TESTID',
        payload: s,
    }
}
export const setArrayQues= (s) => {
    return {
        type: 'SET-ARRAY-QUESTION',
        payload: s,
    }
}
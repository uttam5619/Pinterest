
export const ValidateEmail =(email)=>{
    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    if(!isEmailValid) return false
    return true
}

export const ValidatePassword=(password)=>{
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    if(!isPasswordValid) return false
    return true
}
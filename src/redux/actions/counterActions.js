export const counterAction =(counteraction)=>{
    return {
        type : counteraction
    }
}


export const counterRandom =(rand,payload)=>{
    return {
        type : rand,
        payload:payload
    }
}
import { AUTO, BLUE, GREEN, ORANGE, PINK, RED } from "../actionTypes/actionTypes"

const initialColor = ""

const colorReducer = (state=initialColor,{type,payload})=>{
    switch(type){

        case RED : return state = "red"
        case GREEN : return state = "green"
        case BLUE : return state = "blue"
        case ORANGE : return state = "orange"
        case PINK : return state = "pink"
        case AUTO : return state = "#fff"
        default : return state
    }
}

export default colorReducer;
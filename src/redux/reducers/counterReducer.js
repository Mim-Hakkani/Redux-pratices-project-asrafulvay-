let initialState = 0;

const counterReducer = (state=initialState,{type,payload})=>{
 switch(type){
  case "INC" : return state+=1;
  case "DEC" : return state-=1;
  case "RESET" : return state=0; // test 
  case "OSTIRRESET" : return state=1000;
  case "RAND" : {
    return state = payload;
  }
  default: return state 
 }
}

export default counterReducer;
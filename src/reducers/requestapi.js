import {LIVE_PRICE , LOGIN_TOGGLE,SIGN_TOGGLE} from '../actions/index';
const INITIAL_STATE = {live:[],
                      statutLogin:false,
                      statutSign:false}

export default(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case LIVE_PRICE:
      return Object.assign({},state,{live:action.payload})
    case LOGIN_TOGGLE:
    return Object.assign({},state,{statutLogin:!state.statutLogin})
    case SIGN_TOGGLE:
    return Object.assign({},state,{statutSign:!state.statutSign})
    default:
       return state
  }
}

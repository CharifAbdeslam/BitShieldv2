import {LIVE_PRICE} from '../actions/index';
const INITIAL_STATE = {live:[]}

export default(state= INITIAL_STATE , action)=>{
  switch (action.type) {
    case LIVE_PRICE:
      return Object.assign({},state,{live:action.payload})
    default:
       return state
      
  }
}

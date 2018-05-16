import {LIVE_PRICE,LIVE_TICKER} from '../actions/index';
const INITIAL_STATE = {live:[],liveTicker:[]}

export default(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case LIVE_PRICE:
      return Object.assign({},state,{live:action.payload})
    case LIVE_TICKER:
      return Object.assign({},state,{liveTicker:action.payload})
    default:
       return state
  }
}

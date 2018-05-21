import {LIVE_PRICE,
        LIVE_TICKERETH,
        LIVE_TICKERBCH,
        LIVE_TICKERXRP,
        LIVE_TICKERLTC,
        LIVE_TICKERXMR,
        LIVE_TICKERETC,
        LIVE_TICKERIOT,
        LIVE_TICKERDSH,
        LIVE_TICKERNEO,
        LIVE_TICKERZEC,
        LIVE_TICKEREOS,
        LIVE_TICKEROMG,} from '../actions/index';
const INITIAL_STATE = {live:[],
                       tickerEth:[],
                       tickerBch:[],
                       tickerXrp:[],
                       tickerLtc:[],
                       tickerXmr:[],
                       tickerEtc:[],
                       tickerIot:[],
                       tickerDsh:[],
                       tickerNeo:[],
                       tickerZec:[],
                       tickerEos:[],
                       tickerOmg:[]
                     }

export default(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case LIVE_PRICE:
      return Object.assign({},state,{live:action.payload})
    case LIVE_TICKERETH:
      return Object.assign({},state,{tickerEth:action.payload})
    case LIVE_TICKERBCH:
      return Object.assign({},state,{tickerBch:action.payload})
    case LIVE_TICKERXRP:
      return Object.assign({},state,{tickerXrp:action.payload})
    case LIVE_TICKERLTC:
        return Object.assign({},state,{tickerLtc:action.payload})
    case LIVE_TICKERXMR:
        return Object.assign({},state,{tickerXmr:action.payload})
    case LIVE_TICKERETC:
        return Object.assign({},state,{tickerEtc:action.payload})
    case LIVE_TICKERIOT:
        return Object.assign({},state,{tickerIot:action.payload})
    case LIVE_TICKERDSH:
        return Object.assign({},state,{tickerDsh:action.payload})
    case LIVE_TICKERNEO:
        return Object.assign({},state,{tickerNeo:action.payload})
    case LIVE_TICKERZEC:
        return Object.assign({},state,{tickerZec:action.payload})
    case LIVE_TICKEREOS:
        return Object.assign({},state,{tickerEos:action.payload})
    case LIVE_TICKEROMG:
        return Object.assign({},state,{tickerOmg:action.payload})
    default:
       return state
  }
}

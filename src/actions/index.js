import { SubmissionError } from 'redux-form';
import socketIOClient from 'socket.io-client';
export const LIVE_PRICE = "LIVE_PRICE";
export const LIVE_TICKERETH = "LIVE_TICKERETH";
export const LIVE_TICKERBCH = "LIVE_TICKERBCH";
export const LIVE_TICKERXRP = "LIVE_TICKERXRP";
export const LIVE_TICKERLTC = "LIVE_TICKERLTC";
export const LIVE_TICKERXMR = "LIVE_TICKERXMR";
export const LIVE_TICKERETC = "LIVE_TICKERETC";
export const LIVE_TICKERIOT = "LIVE_TICKERIOT";
export const LIVE_TICKERDSH = "LIVE_TICKERDSH";
const socket = socketIOClient('http://localhost:3001');
const URL = "https://api.bitfinex.com/v2/tickers?symbols=";
const TICKERS="tETHBTC,tBCHBTC,tXRPBTC,tLTCBTC,tXMRBTC,tETCBTC,tIOTBTC,tDSHBTC,tNEOBTC,tZECBTC,tEOSBTC,tOMGBTC";

let tickerChannel = {};
export const _getLive =()=> dispatch =>{
  fetch(`${URL}${TICKERS}`).then(res => res.json())
            .then(data => {
              dispatch({type:LIVE_PRICE , payload:data})
            });
};

socket.on("channelID",function(data){
  tickerChannel = Object.assign({},data);
})
export const _getTicker =()=> dispatch =>{
  socket.on("ticker",function(data){
    console.log(tickerChannel)
       if(tickerChannel.eth.chanId === data[0]){
        dispatch({type:LIVE_TICKERETH,payload:data})
       }
       if(tickerChannel.bch.chanId === data[0]){
         dispatch({type:LIVE_TICKERBCH,payload:data})
       }
       if(tickerChannel.xrp.chanId === data[0]){
         dispatch({type:LIVE_TICKERXRP,payload:data})
       }
       if(tickerChannel.ltc.chanId === data[0]){
         dispatch({type:LIVE_TICKERLTC,payload:data})
       }
       if(tickerChannel.xmr.chanId === data[0]){
         dispatch({type:LIVE_TICKERXMR,payload:data})
       }
       if(tickerChannel.etc.chanId === data[0]){
         dispatch({type:LIVE_TICKERETC,payload:data})
       }
       if(tickerChannel.iot.chanId === data[0]){
         dispatch({type:LIVE_TICKERIOT,payload:data})
       }
       if(tickerChannel.dsh.chanId === data[0]){
         dispatch({type:LIVE_TICKERDSH,payload:data})
       }
  })

}
export const submit = (values) => {
    if (!values.username) {
      throw new SubmissionError({
        username: 'Username cant be empty',
        _error: 'Login failed',
      });
    } else if (!values.password) {
      throw new SubmissionError({
        password: 'Password cant be empty',
        _error: 'Login failed',
      });
    }else {
      console.log(JSON.stringify(values))
    }
}

export const _signUp = (values)=> {
  console.log(JSON.stringify(values));
};

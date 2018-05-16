import { SubmissionError } from 'redux-form';
import socketIOClient from 'socket.io-client';
export const LIVE_PRICE = "LIVE_PRICE";
export const LIVE_TICKER = "LIVE_TICKER";
const socket = socketIOClient('http://localhost:3001');
const URL = "https://api.bitfinex.com/v2/tickers?symbols=";
const TICKERS="tETHBTC,tBCHBTC,tXRPBTC,tLTCBTC,tXMRBTC,tETCBTC,tIOTBTC,tDSHBTC,tNEOBTC,tZECBTC,tEOSBTC,tOMGBTC";


export const _getLive =()=> dispatch =>{
  fetch(`${URL}${TICKERS}`).then(res => res.json())
            .then(data => {
              dispatch({type:LIVE_PRICE , payload:data})
            });
};
export const _getTicker =()=> dispatch =>{
  socket.on("tickerEth",function(data){
      dispatch({type:LIVE_TICKER,payload:data})
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

import { SubmissionError } from 'redux-form';
const URL = "https://api.bitfinex.com/v2/tickers?symbols=";
const TICKERS="tBTCUSD,tETHUSD,tBCHUSD,tXRPUSD,tLTCUSD,tXMRUSD,tETCBTC,tIOTUSD,tDSHUSD,tNEOUSD";
export const LIVE_PRICE = "LIVE_PRICE";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const _getLive =()=> dispatch =>{
  fetch(`${URL}${TICKERS}`).then(res => res.json())
            .then(data => {
              dispatch({type:LIVE_PRICE , payload:data})
            });
};

export function submit(values) {
    if (!values.username) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (!values.password) {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    }else {
      console.log(JSON.stringify(values))
    }
}

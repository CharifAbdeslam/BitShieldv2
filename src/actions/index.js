import { SubmissionError } from 'redux-form';

const URL = "https://api.bitfinex.com/v2/tickers?symbols=";
const TICKERS="tBTCUSD,tETHUSD,tBCHUSD,tXRPUSD,tLTCUSD,tXMRUSD,tETCBTC,tIOTUSD,tDSHUSD,tNEOUSD";
export const LIVE_PRICE = "LIVE_PRICE";

export const _getLive =()=> dispatch =>{
  fetch(`${URL}${TICKERS}`).then(res => res.json())
            .then(data => {
              dispatch({type:LIVE_PRICE , payload:data})
            });
};

export const submit = (values) => {
    if (!values.username) {
      throw new SubmissionError({
        username: 'Username cant be empty',
        _error: 'Please check your username and password',
      });
    } else if (!values.password) {
      throw new SubmissionError({
        password: 'Password cant be empty',
        _error: 'Please check your username and password',
      });
    }else {
      console.log(JSON.stringify(values))
    }
}

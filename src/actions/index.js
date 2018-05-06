const URL = "https://api.bitfinex.com/v2/tickers?symbols=";
const TICKERS="tBTCUSD,tETHUSD,tBCHUSD,tXRPUSD,tLTCUSD,tXMRUSD,tETCBTC,tIOTUSD,tDSHUSD,tNEOUSD";
export const LIVE_PRICE = "LIVE_PRICE";

export const _getLive =()=> dispatch =>{
  fetch(`${URL}${TICKERS}`).then(res => res.json())
            .then(data => {
              dispatch({type:LIVE_PRICE , payload:data})
            });
};

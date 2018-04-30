import {combineReducers} from 'redux';
import LandingLiveTicker from './requestapi';
const reducers = combineReducers({
price:LandingLiveTicker
})
export default reducers;

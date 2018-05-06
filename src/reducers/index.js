import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import LandingLiveTicker from './requestapi';

const reducers = combineReducers({
price:LandingLiveTicker,
form:reduxFormReducer
})
export default reducers;

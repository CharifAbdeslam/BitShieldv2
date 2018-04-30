import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'cryptocoins-icons/webfont/cryptocoins.css';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const store=createStore(reducers,compose(
  applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
ReactDOM.render(<Provider store={store}>
                   <App />
               </Provider>,
  document.getElementById('root'));
registerServiceWorker();

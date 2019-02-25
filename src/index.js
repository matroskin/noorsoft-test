import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getUsers } from './actions';
import App from './App';
import Info from './pages/Info';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

setTimeout(function tick() {
  store.dispatch(getUsers());
  console.log('get data');
  setTimeout(tick, 30000);
});


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/info" component={Info} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();

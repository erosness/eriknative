import React
import { AppRegistry, View  } from 'react-native';
import App from './components/App';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import React from 'react';
import { Provider } from 'react-redux';
import store from './../store';
import Header from './Header';
import Movies from './Movie/Movies';

const title = 'React Movie Cards';

const App = () => (
  <div>
    <Provider store={store}>
    <Header title={title} />
    <div className="mt-5">
      <Movies />
    </div>
    </Provider>
  </div>
);

export default App;

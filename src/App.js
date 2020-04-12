import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import "./App.css";

import Boy from "./pages/boy";
import Girl from "./pages/girl";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="boy"><Boy /></div>
        <div className="girl"><Girl /></div>
      </div>
    </Provider>
    
  );
}

export default App;

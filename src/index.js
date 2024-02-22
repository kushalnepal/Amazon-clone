import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
// import reportWebVitals from './reportWebVitals';
import { StateProvider } from './component/stateprovider/Stateprovider';
import reducer,{InitialState} from "./component/stateprovider/reducer.js"


ReactDOM.render(
  <React.StrictMode>
   <StateProvider initialState={InitialState} reducer={reducer}>
   <App />
   </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Wraps around the app component similar to contextapi provider
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryclient=new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryclient}><App /></QueryClientProvider>
    
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


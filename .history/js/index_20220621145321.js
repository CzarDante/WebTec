import React from 'react';
import ReactDom from 'react-dom';
import NewsResult from './components/newsResult';

const root = ReactDOM.createRoot(document.getElementById('result'));
root.render(<NewsResult />, document.getElementById("result"));
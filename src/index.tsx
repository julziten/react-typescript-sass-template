// import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Expenses from './components/routes/Expenses/Expenses';
import Invoices from './components/routes/Invoices/Invoices';
import './App.scss';
import { Invoice } from './components/routes/Invoice/Invoice';


// the STAR has a special meaning here. It will match only when no other rourtes do.

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} >
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
      <Route path="*"
      element={
        <main style={{ padding: '1rem'}}> 
          <p>There is nothing here!</p>
        </main>
      }/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

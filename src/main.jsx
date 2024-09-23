import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmYMr4UnAms463BgAG-clnk_TNNgpeot4",
  authDomain: "monologodsn.firebaseapp.com",
  projectId: "monologodsn",
  storageBucket: "monologodsn.appspot.com",
  messagingSenderId: "303196484913",
  appId: "1:303196484913:web:f8d44b1d558ac99040ec10"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

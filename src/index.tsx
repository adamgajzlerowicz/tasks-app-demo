import React from 'react';
import ReactDOM from 'react-dom';
import {Kanban} from "./kanban/kanban";
import { createGlobalStyle } from 'styled-components'
import firebase from 'firebase'

import './index.css'

firebase.initializeApp({
    apiKey: "AIzaSyBY8dOhtotTEc8LblVNHxjW2Et2TFlj4UM",
    authDomain: "tasks-app-demo-312219.firebaseapp.com",
    projectId: "tasks-app-demo-312219",
    storageBucket: "tasks-app-demo-312219.appspot.com",
    messagingSenderId: "22392413963",
    appId: "1:22392413963:web:fb36b0633f0d559d05cc0e"
})

const CSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <CSSReset />
        <Kanban />
    </React.StrictMode>,
    document.getElementById('root')
);


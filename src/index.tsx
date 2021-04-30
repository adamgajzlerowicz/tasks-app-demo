import React from 'react';
import ReactDOM from 'react-dom';
import {Kanban} from "./kanban/kanban";
import { createGlobalStyle } from 'styled-components'
import './index.css'


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


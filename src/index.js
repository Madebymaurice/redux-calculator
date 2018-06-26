import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import store from './store';

import "./index.css";

import Calculator from "./components/Calculator";

ReactDOM.render(
	<Provider store={store}>
		<Calculator />
	</Provider>,
	document.getElementById( 'root' )
);

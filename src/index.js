import React from "react";
import ReactDOM from 'react-dom/client';
import Shop from "./Shop.js";
import "./index.css";

function App() {
	return <Shop />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
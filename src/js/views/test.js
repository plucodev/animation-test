import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Test = () => {
	const [count, setCount] = useState(12);
	const { store, actions } = useContext(Context);
	const [contentStatus, displayContent] = useState(false);

	return (
		<div className="container">
			<div>{count}</div>
		</div>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Test = () => {
	const [count, setCount] = useState(12);
	const { store, actions } = useContext(Context);
	const [contentStatus, displayContent] = useState(false);
	const contentProps = useSpring({
		opacity: contentStatus ? 1 : 0,
		marginTop: contentStatus ? 0 : -1000
	});
	return (
		<div className="container">
			<div>{count}</div>
			<div className="button-container">
				<button onClick={() => displayContent(a => !a)} className="button">
					Toggle Content
				</button>
			</div>
			{!contentStatus ? (
				<div>No Content</div>
			) : (
				// Here's where the animated hook comes into play
				<animated.div className="box" style={contentProps}>
					<h1>This content slid down. Thanks to React Spring</h1>
				</animated.div>
			)}
		</div>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import range from "lodash-es/range";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";
const items = range(4);
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
export const Test = () => {
	const [count, setCount] = useState(12);
	const { store, actions } = useContext(Context);
	const [contentStatus, displayContent] = useState(false);
	// const contentProps = useSpring({
	// 	opacity: contentStatus ? 1 : 0,
	// 	marginTop: contentStatus ? 0 : -1000
	// });
	const { radians } = useSpring({
		to: async next => {
			while (1) await next({ radians: 2 * Math.PI });
		},
		from: { radians: 0 },
		config: { duration: 3500 },
		reset: true
	});
	return (
		<div className="container">
			<div>{count}</div>
			{/* <div className="button-container">
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
			)} */}

			{items.map(i => (
				<animated.div
					key={i}
					className="script-bf-box test"
					style={{ transform: radians.interpolate(interp(i)) }}>
					Test
				</animated.div>
			))}
		</div>
	);
};

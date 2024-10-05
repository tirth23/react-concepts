import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {
	const [time, setTime] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [isPause, setIsPause] = useState(false);
	const intervalRef = useRef(null);

	const handleInput = (e) => {
		setTime(parseInt(e.target.value * 60));
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes} : ${seconds}`;
	};

	const handleStart = () => {
		setIsActive(true);
		setIsPause(false);
	};

	const handlePause = () => {
		setIsPause(!isPause);
	};

	const handleReset = () => {
    clearInterval(intervalRef.current);
		setTime(0);
		setIsActive(false);
		setIsPause(false);
	};

	useEffect(() => {
		if (isActive && !isPause && time > 0) {
			intervalRef.current = setInterval(() => {
				setTime((prev) => prev - 1);
			}, 1000);
		} else if (time === 0) {
			clearInterval(intervalRef.current);
			setIsActive(false);
			alert("Time is up");
		}
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [isActive, isPause, time]);

	return (
		<div className="countdown-timer">
			<h1>Countdown Timer</h1>
			<div className="timer-display">
				<input
					type="number"
					placeholder="Enter time in minutes"
					onChange={handleInput}
				/>
				<div>{formatTime(time)}</div>
			</div>
			<div className="timer-controls">
				<button onClick={handleStart} disabled={isActive && !isPause}>Start</button>
				<button onClick={handlePause} disabled={!isActive}>{isPause ? "Resume" : "Pause"}</button>
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
};

export default Timer;

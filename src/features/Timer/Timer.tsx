import { useEffect, useState } from "react";
export const Timer = () => {
	const [timeNow, setTimeNow] = useState(new Date());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeNow(new Date());
		}, 1000);
		return () => clearTimeout(timer);
	}, [timeNow]);

	const TARGET_DATE = new Date("01-17-2027");

	const timeDifference = getTimeBetween(TARGET_DATE, timeNow);

	return(
		<div>
			<p>Days: {getDays(timeDifference)}</p>
			<p>Hours: {getHours(timeDifference)}</p>
			<p>Minutes: {getMinutes(timeDifference)}</p>
			<p>Seconds: {getSeconds(timeDifference)}</p>
		</div>
	)
};

const getTimeBetween = (date1: any, date2: any) => {
	return date1.getTime() - date2.getTime();
};

const getDays = (time: number) => Math.floor(time / 86400000);
const getHours = (time: number) => Math.floor(time / 3600000);
const getMinutes = (time: number) => Math.floor(time / 60000);
const getSeconds = (time: number) => Math.floor(time / 1000);

import { useEffect, useState } from "react";
export const Timer = () => {
	const [timeNow, setTimeNow] = useState(new Date());
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeNow(new Date());
		}, 1000);
		return () => clearTimeout(timer);
	}, [timeNow]);

	return <p>{timeNow.toUTCString()}</p>;
};

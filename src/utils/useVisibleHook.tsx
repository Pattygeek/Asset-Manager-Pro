import { useState, useRef, useEffect } from "react";

export default function useVisibleHook(isInitialVisible: boolean) {
	const [isVisible, setIsVisible] = useState(isInitialVisible);

	const visibleRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: any) => {
		if (visibleRef.current && !visibleRef.current.contains(event.target)) {
			setIsVisible(false);
		}
	};

	const handleClickInside = () => setIsVisible(false);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside, true);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside, true);
		};
	});

	return { visibleRef, isVisible, setIsVisible, handleClickInside };
}

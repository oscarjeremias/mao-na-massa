import React from "react";

export function LayoutPageSecond(props:any) {
	return (
	<div className="min-w-full min-h-screen bg-blue-900 text-white grid grid-rows-3 overflow-x-hidden">
		{props.children}
		</div>
	)
}

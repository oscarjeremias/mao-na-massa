import React from "react";

export function LayoutPages({ children }:  any) {
	return (
		<div className="min-w-full min-h-screen bg-blue-900 text-white grid grid-rows-3 overflow-x-hidden">
			{ children }
		</div>
	)
} 

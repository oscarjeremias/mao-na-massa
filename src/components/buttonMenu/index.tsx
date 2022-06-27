import React from "react";
import { useState,useContext } from "react";
import { ContextMenu } from "../../contexts/contextMenu";


export function ButtonMenu() {

	const { setActiveMenu,activeMenu } = useContext(ContextMenu)
	const [style1,setStyle1] = useState<string| null>(null)
	const [style2,setStyle2] = useState<string| null>(null)
	const [style3,setStyle3] = useState<string| null>(null)
	return (
		<>
			<div className={`h-6 w-12 absolute top-4 right-2 duration-700 z-40 sm:hidden`} onClick={() => {

			setActiveMenu(activeMenu === "not-active" ? "active" : "not-active")
			
			setStyle1(activeMenu === "not-active" ? "translate-y-4 rotate-45" : null)

			setStyle2(activeMenu === "not-active" ? "opacity-0" : null)
			
			setStyle3(activeMenu === "not-active" ? "translate-y-0 rotate-[315deg]" : null)

			}}>
			<div
				className={`h-1/3 bg-white rounded ${style1} duration-700`}></div>
			<div
				className={`h-1/3 bg-white translate-y-2 rounded ${style2} duration-700`}></div>
			<div 
				className={`h-1/3 bg-white translate-y-4 rounded ${style3} duration-700`}></div>
		</div>
		</>
	)
}

import React from "react";
import Link from "next/link";
import  dev from "../../assests/redes/dev.png";
import linkedin from "../../assests/redes/linkedin.png";

export function Footer() {
	return (
		<footer className="bg-blue-900 text-white border border-white border-t border-r-0 border-b-0 border-l-0 p-2.5 flex flex-col justify-center items-center gap-4">
			<div className="flex justify-center items-center gap-4">
			<Link href="https://dev.to/oscarjeremiasdev">
				<a target="_blank">
					<img src={dev.src} alt="foto do dev.to" width="50px" />
				</a>
			</Link>
			<Link href="https://www.linkedin.com/in/oscar-jeremias-jc-356821235/">
				<a target="_blank">
					<img src={linkedin.src} alt="foto do linkedin" width="50px"/>
				</a>
			</Link>
		</div>
			<p className="font-light m-4 text-center">&copy; 2022 Mão na Massa, OJ PROJECTS</p>
		</footer>
	)
}

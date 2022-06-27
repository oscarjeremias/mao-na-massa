import React from "react";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { ButtonMenu } from "../buttonMenu";
import { Menu } from "../menu";

export function Header() {
	return (
		<div className="sm:min-w-full sm:h-20 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between sm:border sm:border-white sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:border-b">
			<Menu />
			<header className="flex justify-between items-center border border-white border-t-0 border-l-0 border-r-0 border-b p-2 overflow-x-hidden sm:border-b-0">
			<div>
				<Link href="/">
					<a>
						<img src={logo.src} alt="logo" width="150px"/>
					</a>
				</Link>
			</div>
			<ButtonMenu />
		</header>
		</div>
	)
}

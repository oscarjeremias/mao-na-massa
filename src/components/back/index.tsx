import React from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md"

export function Back() {
	return (
		<div className="p-2.5 border border-b border-t-0 border-r-0 border-l-0">
		<Link href="/">
			<a>
				<MdArrowBack className="text-3xl duration-100 hover:bg-blue-400" />
			</a>
		</Link>
		</div>
	)
}

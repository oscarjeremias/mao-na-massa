import React from "react";
import Link from "next/link";

export function ButtonLogin() {
	return (
		<button className="text-white bg-blue-400 m-2 mb-8 px-4 py-2 rounded drop-shadow-3xl hover:drop-shadow-none duration-300">
			<Link href="/login">
				<a>Fazer login</a>
			</Link>
		</button>
	)
}

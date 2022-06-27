import React from "react";
import { ContextLogin } from "../../contexts/contextLogin";
import { ContextUser } from "../../contexts/contextUser";
import { ButtonLogin } from "../buttonLogin";
import { useContext } from "react";
import Link from "next/link";

export function PerfilUser() {
	const { isLogado } = useContext(ContextLogin)
	const { user } = useContext(ContextUser)
	return (
		<>
			{isLogado === true ? <div className="font-light">
			<div className="h-40 w-40 rounded-full border border-white">
				{user.git && <img src={`${user.git}.png`} className="w-full rounded-full" alt="foto do user"/>}
			</div>
			<div className="my-4 py-3 border border-white border-t-0 border-r-0 border-l-0 border-b text-2xl">{user.name}</div>
				{user.git && <Link href={user.git}><a className="text-blue-400">GitHub</a></Link>}
			</div> : <div className="min-h-screen flex justify-center items-center px-2.5 py-4"><ButtonLogin /></div>}
		</>
	)
}

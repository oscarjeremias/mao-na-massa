import React from "react";
import { ContextMenu } from "../../contexts/contextMenu";
import { useContext,useEffect } from "react";
import { ButtonLogin } from "../buttonLogin";
import Link from "next/link";
import { ContextLogin } from "../../contexts/contextLogin";  

export function Menu() {
	const { activeMenu,setActiveMenu } = useContext(ContextMenu)
	const { isLogado } = useContext(ContextLogin)
	useEffect(() => {
		setActiveMenu("not-active")
	},[])
	return (
		<nav className={`h-screen min-w-screen z-30 ${activeMenu === "not-active" ? "hidden" : "flex"} p-4 flex-col justify-center sm:justify-end items-center gap-4 overflow-hidden text-center sm:flex sm:flex-row sm:gap-3 sm:h-full sm:w-2/4`}>
			<ul className="sm:flex sm:justify-center sm:items-center sm:gap-3">
				<li className="m-2 duration-100 p-2 rounded hover:bg-blue-400">
					<Link href="/artigos">
						<a>Artigos</a>
					</Link>
				</li>
				<li className="m-2 duration-100 p-2 rounded hover:bg-blue-400">
						<Link href="/about">
							<a>Sobre me</a>
						</Link>
				</li>
				{ isLogado === true ? <>
					<li className="m-2 duration-100 p-2 rounded hover:bg-blue-400">
					<Link href={"/perfil"}>
						<a>Perfil</a>
					</Link>
				</li>
					<button className="m-2 duration-100 p-2 rounded hover:bg-blue-400" onClick={() => {
						localStorage.setItem("isLogin", "")
						localStorage.setItem("user", JSON.stringify({}))
						window.location.href = "/"
					}}>sair</button>
					</>: ""}
			</ul>
			{ isLogado === true ? "" : <div className="mt-4"><ButtonLogin /></div> }
		</nav>
	)
}

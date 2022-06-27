import React from "react";
import { useState,FormEvent } from "react";
import logo from "../../assests/logo.png";
import { regexName } from "../../ultis/regex/regexName";
import { regexPassword } from "../../ultis/regex/regexPassword";
import { regexEmail } from "../../ultis/regex/regexEmail";
import axios from "axios";
import { MdCached } from "react-icons/md";

type ICadastroType = {
	setIsLogin: (arg:boolean) => void
}

export function Cadastro({ setIsLogin }: ICadastroType) {
	const [password,setPassword] = useState<string>("")
	const [passwordTypeInput,setPasswordTypeInput] = useState<string>("password")
	const [mostrar,setMostrar] = useState<string>("mostrar")
	const [name,setName] = useState<string>("")
	const [email,setEmail] = useState<string>("")

	const [erroName,setErroName] = useState<string>()
	const [erroEmail,setErroEmail] = useState<string>()
	const [erroPassword,setErroPassword] = useState<string>()
	const [isSendUser,setIsSendUser] = useState<boolean>(false)
	const [errPost,setErrPost] = useState<string>("")
	const [git,setGit] = useState<string>("")

	async function sendInfoUser(event:FormEvent) {
		event.preventDefault()
		const isName = regexName(name)
		const isEmail = regexEmail(email)
		const isPassword = regexPassword(password)

		setErroName(isName === false ? 
								"Nome inválido. O nome tem que começar com letra maiúsculas e tem que ser o primeiro nome e sobrenome" : "")

		setErroEmail(isEmail === false ? 
								 "Email inválido. tente um email válido" : "")

		setErroPassword(isPassword === false ?
										"Palavra passe inválida. A palavra passe tem que no minímo 8 digitos 1 número e uma special caractere especial (#$%)" : "")

		if(isName === true && isEmail === true && isPassword === true){
			setIsSendUser(true)
			const res = await axios.post("/api/createUser",{
				name,
				email,
				password,
				git
			})
			setIsSendUser(false)
			if(res.data.sms) {
				setErrPost(res.data.sms)
			}else {
			setIsLogin(true)
			}
		}
	}
	return (
		<div className="bg-blue-900 text-white">               
			<img src={logo.src} alt="logo" width="200px" className="mx-auto"/>
				<div className="flex flex-col items-center text-center">
					<div className="my-10">
				<h1 className="text-3xl font-bold">Cadastro</h1>
				<p className="font-thin text-xs">Melhor Blog de programação do       mundo</p>
				</div>
			<form onSubmit={sendInfoUser} className="flex flex-col items-center my-8">
				<input type="text"
				placeholder="Nome" 
					className="bg-blue-900 border border-white border-b border-r-0 border-t-0 border-l-0 p-2 my-4 w-4/5 outline-none focus:border-blue-400 focus:border-b-4 my-[-1px] duration-300" 
				onChange={(event) => setName(event?.target.value)} />
				<div className="text-xs font-thin my-2 text-red-400">{erroName}</div>
				<input type="text"
				placeholder="Url do github" 
					className="bg-blue-900 border border-white border-b border-r-0 border-t-0 border-l-0 p-2 my-4 w-4/5 outline-none focus:border-blue-400 focus:border-b-4 my-[-1px] duration-300" 
				onChange={(event) => setGit(event?.target.value)} />

				<input type="email"
				placeholder="Email"
					className="bg-blue-900 border border-white border-b border-t-0 border-r-0 border-l-0 p-2 my-2 w-4/5 outline-none focus:border-blue-400 focus:border-b-4 focus:my-[-1px] duration-300"
					onChange={(event) => setEmail(event?.target.value)}/>
				<div className="text-xs font-thin text-red-400">{erroEmail}</div>

				<div className="flex items-center">
				<input 
					type={passwordTypeInput}
					placeholder="Palavra passe"
					className="bg-blue-900 border border-white border-b border-t-0 border-l-0 border-r-0 p-2 my-3 w-4/5 outline-none focus:border-blue-400 focus:border-b-4 focus:my-[-1px] duration-300"
					value={password}
					onChange={(event) => setPassword(event.target.value) }/><span
						className="text-xs font-thin duration-100 p-3 border border-white border-b border-t-0 border-r-0 border-l-0"

						onClick={() => {
							setPasswordTypeInput(passwordTypeInput === "password" 
								? "text" : "password")
								setMostrar(mostrar === "mostrar" ? "ocultar" : "mostrar")
						}}>{mostrar}</span>
				</div>
				<div className="text-xs font-thin text-red-400">{erroPassword || errPost}</div>
				<button type="submit" className="text-white bg-blue-400 m-2 my-10 px-4 py-2 rounded drop-shadow-3xl hover:drop-shadow-none duration-300 flex justify-center items-center gap-2" disabled={isSendUser === true}>
					{ isSendUser === true ? <MdCached className="animate-spin" /> : "" }
					Cadastro
				</button>
			</form>
			</div>
		</div>
	)
}

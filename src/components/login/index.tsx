import React from "react";
import { useState,FormEvent,useContext } from "react";
import logo from "../../assests/logo.png";
import { regexPassword } from "../../ultis/regex/regexPassword";
import { regexEmail } from "../../ultis/regex/regexEmail";
import axios from "axios";
import { ContextLogin } from "../../contexts/contextLogin";
import { ContextUser } from "../../contexts/contextUser";
import { MdCached } from "react-icons/md";


export function LoginUser() {
	const { isLogado,setIsLogado } = useContext(ContextLogin)
	const { setUser,user } = useContext(ContextUser)
	const [email,setEmail] = useState<string>("")
	const [password,setPassword] = useState<string>("")
	const [passwordTypeInput,setPasswordTypeInput] = useState<string>("password")
	const [mostrar,setMostrar] = useState<string>("mostrar")

const [erroEmail,setErroEmail] = useState<string>()
const [erroPassword,setErroPassword] = useState<string>()
const [errCredentials,setErrCredentials] = useState<string>("")
const [isLogin,setIsLogin] = useState<boolean>(false)

localStorage.setItem("isLogin", `${isLogado}`)
localStorage.setItem("user", JSON.stringify(user))

async function sendInfoUser(event:FormEvent) {
	event.preventDefault()

	const isEmail = regexEmail(email)
	const isPassword = regexPassword(password)

	setErroEmail(isEmail === false ?
							 "Email inválido. tente um email válido" : "")
	setErroPassword(isPassword === false ?
									"Palavra passe inválida. A palavra passe tem que no minímo 8 digitos 1 número e uma special caractere especial (#$%)" : "")
	if(isEmail === true && isPassword === true){
		setIsLogin(true)
		const res = await axios.post("/api/authentication",{
			email,
			password
		})
		if(res.data.token) {
			const data = await axios.post("/api/login",{
				token: res.data.token
			})
			setIsLogado(true)
			const { _id,name,email,git } = data.data
			const password = ""
			setUser({ _id,name,email,password,git })
			window.location.href = "/"
		}else {
			setErrCredentials(res.data.sms)
		}
	}
	setIsLogin(false)
}

	return (
		<div className="bg-blue-900 text-white">
			<img src={logo.src} alt="logo" width="200px" className="mx-auto"/>
				<div className="flex flex-col items-center">
					<div className="my-4 text-center">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="font-thin text-xs">Melhor Blog de programação do mundo</p>
					</div>
					<form onSubmit={sendInfoUser} className="flex flex-col items-center my-8">
						<input type="email"
							placeholder="Email"
						className="bg-blue-900 border border-white border-b border-t-0 border-r-0 border-l-0 p-2 my-2 w-4/5 outline-none focus:border-blue-400 focus:border-b-4 focus:my-[-1px] duration-300"
						onChange={(event) => setEmail(event?.target.value)}/>
						<div className="text-xs font-thin text-red-400">{erroEmail}</div>
							<div className="flex items-center">
								<input
									type={passwordTypeInput}
									placeholder="Palavra passe"
									className="bg-blue-900 border border-white border-b border-t-0 border-l-0 border-r-0 p-2 my-2 w-4/5 outline-none focus:border-blue-400 focus:border-b-4 focus:my-[-1px] duration-300"
									value={password}
									onChange={(event) => setPassword(event.target.value)}/>
								<span  className="text-xs font-thin duration-100 p-3 border border-white border-b border-t-0 border-r-0 border-l-0"
								onClick={() => {
									setPasswordTypeInput(passwordTypeInput === "password"
										? "text" : "password")
										setMostrar(mostrar === "mostrar" ? "ocultar" : "mostrar")
						}}>{mostrar}</span>
						</div>
						<div className="text-xs font-thin text-red-400 text-center">{erroPassword || errCredentials}</div>
						<button type="submit" 
						className="text-white bg-blue-400 m-2 my-10 px-4 py-2 rounded drop-shadow-3xl hover:drop-shadow-none duration-300 flex justify-center items-center gap-2" disabled={isLogin === true}>
							{ isLogin === true ? <MdCached className="animate-spin" /> : ""}
						Login
						</button>
					</form>
				</div>
		</div>
	)
}

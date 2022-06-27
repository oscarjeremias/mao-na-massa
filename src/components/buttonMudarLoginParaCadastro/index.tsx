import React from "react";

interface IpropsType {
	isLogin: boolean;
	setIsLogin: (args:boolean) => void
}

export function ButtonMudarLoginParaCadastro({ isLogin,setIsLogin }: IpropsType) {
	return (
		<button
			className="font-thin text-xs text-center my-[-30px]"
		onClick={() => setIsLogin(isLogin === true ? false : true)}
		>{ isLogin === true ? <span>Cadastro</span> : <span>Login</span> }</button>
	)
}

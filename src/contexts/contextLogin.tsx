import { createContext } from "react";

interface ILogonTypes {
	isLogado: boolean;
	setIsLogado: (arg:boolean) => void
}

export const ContextLogin = createContext<ILogonTypes>({
	isLogado: true,
	setIsLogado: (arg) => void {
	}
})

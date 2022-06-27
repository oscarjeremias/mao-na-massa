import { createContext } from "react";

interface IUserTypes {
	user: {
		_id: string;
		name: string;
		email: string;
		password: string;
		git:string
	}
	setUser: (user:{
		_id:string; 
		name: string;
		email: string;
		password: string
		git: string;
	}) => void ;
}

export const ContextUser = createContext<IUserTypes>({
	user: {
		_id: "1",
		name: "oscar jeremias",
		email: "oscarjeremias3@gmail.com",
		password: "Catarina",
		git: "https://github.com/oscarjeremias"
	},
	setUser: (user) => void {		
	},
})

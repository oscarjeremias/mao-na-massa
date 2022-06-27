import React from "react";
import { ContextLogin } from "../../contexts/contextLogin";
import { ContextUser } from "../../contexts/contextUser";
import { useContext,useState,FormEvent } from "react";
import axios from "axios";
import { MdCached } from "react-icons/md";

export function InputComent(props:any) {
	const { isLogado } = useContext(ContextLogin)
	const { user }  = useContext(ContextUser)
	const [coment,setComent] = useState<string>("")
	const [loadComent,setLoadComent] = useState<boolean>(false)
	const [errComent,setErrComent] = useState<string>("")

	async function sendComent(event:FormEvent) {
		event.preventDefault()
		setLoadComent(true)
			try {
			if(coment !== ""){
			await axios.post("/api/createComent",{
				id_page:props.idPage,
				coment,
				user_email:user.email,
				user_name:user.name,
				git:user.git
			})
			setLoadComent(false)
			setComent("")
			} else {
				setErrComent("Para enviar o comentário primerio deves preencher o campo acima")
	setLoadComent(false)
			}
		} catch(err) {
			console.log(err)
		}
}
	return (
		<>
		{isLogado === true ? 
			<section>
			<form onSubmit={sendComent}>
			<textarea placeholder="Deixe aqui o teu comentário" value={coment}
				className="bg-blue-900 p-2 border border-white border-t-0 border-r-0 border-l-0 border-b outline-none my-4 focus:border-blue-400 focus:border-b-4 focus:mb-[-2px]"
			onChange={(event) => setComent(event?.target.value)}></textarea>
				<div className="text-xs font-thin text-red-400">{coment === "" ? errComent : ""}</div>
			<button className="flex justify-center items-center gap-2 text-white bg-blue-400 my-4 mx-2.5 px-8 py-1 rounded drop-shadow-3xl hover:drop-shadow-none duration-300" type="submit">
				{loadComent === true ?<MdCached className="animate-spin"/> : ""}
				Enviar
			</button>
				</form>
		</section> 
			: ""}
		</>
	)
}

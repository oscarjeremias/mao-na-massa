import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

interface IComent {
	_id:string;                                                        
	id_page:string;                                                       
	coment:string;
	user_email:string;                                                    
	user_name:string;                                                     
	git:string;                                                 
}

export function ListComents(props:any) {
	const [data,setData] = useState<IComent[]>([{
		_id: "",
		id_page: "",
		coment: "", 
		user_email: "",
		user_name: "",
		git: "",
	}])
	useEffect(() => {
		axios.post("/api/findComent", {
				id_page:props.idPage
			}).then(res => setData(res.data))
			.catch(err => console.log(err))
	},[data])
	return (
		<>
			<h1 className="text-3xl font-bold">Comentários</h1>
		<ul className="min-w-full flex flex-col items-center gap-4 my-6 sm:flex-row sm:flex-wrap">
			{ data && data.map((c:IComent,i) => {
				return(
					<li key={i} className="flex flex-col items-center gap-2">
					<div className="flex gap-2">
						<div className="w-10 rounded-full">
						<img src={`${c.git}.png`} alt="foto do user" className="border border-white rounded-full"/>
						</div>
						<span>{c.user_name}</span>
					</div>
					<div className="bg-blue-400 p-2 rounded">{c.coment}</div>
				</li>
				)
			})}
		</ul>
		</>
	)
}

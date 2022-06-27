import type { NextApiRequest,NextApiResponse } from "next";
import { createComentMongoDB } from "../../../repositories/createComentMongoDB";
import { v4 as uuidv4 } from "uuid";

export default async function hendle(req:NextApiRequest,res:NextApiResponse) {
	const { id_page,coment,user_email,user_name,git } = req.body
	const _id = uuidv4()
	try {
	await createComentMongoDB({
		_id,
		id_page,
		coment,
		user_email,
		user_name,
		git
	})
	return res.status(201).send("create sucess")
	}catch {
		return res.status(400).send("[ERRO] tente novamente!")
	}
}

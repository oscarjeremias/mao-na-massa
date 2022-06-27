import type { NextApiRequest,NextApiResponse } from "next";
import { findComentMonhoDB } from "../../../repositories/findComentMonhoDB";

export default async function hendle(req:NextApiRequest,res:NextApiResponse) {
	const { id_page } = req.body
	try{
		const coment = await findComentMonhoDB(id_page)
		return res.status(200).json(coment)
	}catch {
		return res.status(400).send("[ERRO] tente novamente!")
	}
}

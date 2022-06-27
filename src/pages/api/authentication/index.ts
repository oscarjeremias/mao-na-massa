import type { NextApiRequest,NextApiResponse } from "next";
import { findByEmailMongoDB } from "../../../repositories/findByEmailMongoDB";
import jwt from "jsonwebtoken";

export default async function hendle(req:NextApiRequest,res:NextApiResponse) {
	if(req.method === "POST"){
	
	const { email,password } = req.body

	const user = await findByEmailMongoDB(email)

	if(user.email === email && user.password === password) {

		jwt.sign({
			exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 60),
			email: user.email
		}, `${process.env.KEY_JWT}`, { algorithm: "HS256" },(err,token) => {
			if(err) throw err
			
			return res.status(200).json({ token })
		})

	} else {
		return res.status(200).json({ sms: "[ERRO] não tem  nenhum usuário cadastro com esse email ou palavra passe" })

	}
	} else {
		return res.status(400).send(`this route is not ${req.method} it is post`)
	}
}

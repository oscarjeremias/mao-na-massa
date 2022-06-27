import type { NextApiRequest,NextApiResponse } from "next"
import jwt from "jsonwebtoken";
import { findByEmailMongoDB } from "../../../repositories/findByEmailMongoDB";

export default async function hendle(req:NextApiRequest,res:NextApiResponse) {
	if(req.method === "POST") {
		const { token } = req.body

		jwt.verify(token, `${process.env.KEY_JWT}`, async(err:any,decoded:any) => {
			if(err) {
				return  res.status(200).json({ sms: "token inválido!" })
			}
			const user = await findByEmailMongoDB(decoded.email)

			return res.status(200).json(user)
		})
	}else {
		return res.status(400).send(`this route is not ${req.method} it is post`)
	}
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { createUserMongoDB } from "../../../repositories/createUserMongoDB";
import { v4 as uuidv4 } from "uuid";

export default async function hendle(req:NextApiRequest,res:NextApiResponse) {
	if(req.method === "POST"){
		const { name,email,password,git } = req.body
		const _id = uuidv4()
		const smsErr = await createUserMongoDB({ _id,name,email,password,git })

		if(smsErr) {
			return res.status(200).json({ sms: smsErr })
		}else {
			return res.status(201).send("create sucess")
		}
	} else {
		return res.status(400).send(`this route is not ${req.method} it is post`)
	}
}

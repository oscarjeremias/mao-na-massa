import { IComent } from "../entities/Coment";
import { Coment } from "../schema";
import { connect } from "mongoose";

export async function createComentMongoDB({ _id,id_page,coment,user_email,user_name,git }:IComent) {
	try {
	await connect(`${process.env.DATA_BASE_USER_URL}`)

	const comentUser = new Coment({
		_id,
		id_page,
		coment,
		user_email,
		user_name,
		git
	})
	await comentUser.save()

	}catch(err) {
		console.log(err)
	}
}

import { Coment } from "../schema";
import { connect } from "mongoose";

export async function findComentMonhoDB(id_page:string) {
	try {
		await connect(`${process.env.DATA_BASE_USER_URL}`)

		const coment = await Coment.find({ id_page }).exec()

		return coment
	}catch(err) {
		console.log(err)
	}
}

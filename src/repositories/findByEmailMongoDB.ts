	import { connect } from "mongoose";
import { User } from "../schema";

export async function findByEmailMongoDB(email:string) {
	try {
		await connect(`${process.env.DATA_BASE_USER_URL}`)
		const user = await User.findOne({ email }).exec()

		return user
	}catch(err) {
		console.log(err)
	}
}

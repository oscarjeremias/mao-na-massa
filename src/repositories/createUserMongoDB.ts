import { connect } from "mongoose";
import { findByEmailMongoDB } from "./findByEmailMongoDB";
import { IUser } from "../entities/User";
import { User } from "../schema";

export async function createUserMongoDB({ _id,name,email,password,git }: IUser) {
	try {
		await connect(`${process.env.DATA_BASE_USER_URL}`)

		const userExist = await findByEmailMongoDB(email)
		
		if(userExist) {
			const smsErr = `Já existe um usuário cadastro com esse email ${email}`
			return smsErr
		}else {
			const user = new User({
				_id,
				name,
				email,
				password,
				git
			})

			await user.save()
		}

	}catch(err) {
		console.log(err)
	}
}

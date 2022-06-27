import { Schema,createConnection } from "mongoose";

const connect = createConnection(`${process.env.DATA_BASE_USER_URL}`)

const UserSchema = new Schema({
	_id: String,
	name: String,
	email: String,
	password: String,
	git:String,
})

const ComentSchema = new Schema({
	_id:String,
	id_page:String,
	coment:String,
	user_email:String,
	user_name:String,	
	git:String,
})

export const User = connect.model("users",UserSchema)
export const Coment = connect.model("coments",ComentSchema)

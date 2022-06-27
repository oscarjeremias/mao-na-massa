export function regexPassword(password:string) {
	const regex = /^[A-ZÁ-Ź][a-zá-ź0-9+×÷=/_€£¥₩!@#$%^&*\()-]{7,}$/gi
	const isPassword = regex.test(password)
	return isPassword
}

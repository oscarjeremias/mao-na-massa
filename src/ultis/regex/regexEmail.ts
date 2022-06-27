export function regexEmail(email:string) {
	const regex = /^([a-zá-ź0-9]\.?){5,30}@(gmail|outlook|yahoo)\.com$/
	const isEmail = regex.test(email)

	return isEmail
}

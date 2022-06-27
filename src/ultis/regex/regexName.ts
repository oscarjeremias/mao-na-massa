export function regexName(name:string) {
	const regex = /[Á-ŹA-Z][a-zá-ź]{3,}\s([Á-Źá-ź]|[A-Za-z])[a-zá-ź]{3,}/
	const isName = regex.test(name)
	return isName
}

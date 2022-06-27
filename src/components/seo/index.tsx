import React from "react"
import { NextSeo } from "next-seo"
import logo from "../../assests/logo.png";

interface ISeoTypes {
	title:string;
	description:string;
	url:string;
	foto?: string

}

export function Seo({ title,description,url,foto }:ISeoTypes) {
	return (
		<NextSeo 
		title={title}
		description={description}
		canonical={url}
		openGraph={{
			url: url,
			title: title,
			description: description,
			images: [{
				url: foto || logo.src,
				width: 800,
				height: 600,
				alt: 'image',
				type: 'image/jpeg',
			}],site_name: 'Mão na Massa',
			}}
			twitter={{ 
				handle: '@oscarjeremias3', 
				site: url,
				cardType: foto || logo.src,
			}} />
	)
}

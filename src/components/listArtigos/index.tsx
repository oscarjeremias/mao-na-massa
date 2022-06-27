import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useRouter } from 'next/router'

type IdataType = {
	title: string;
	img: string;
	page: string;
}

const cms_url = process.env.NEXT_PUBLIC_CMS_URL

export function ListArtigos(props:any) {
	const [data,setData] = useState<IdataType[]>()
	const router = useRouter()

	useEffect(() => {
		axios(`${cms_url}`,{
			method: "post",
			data: {
				query: `
				query MyQuery {
					posts {
						title
						img
						page
					}
				}
				`
			}
		}).then(res => setData(res.data.data.posts))
		.catch(err => console.log(err))
	},[])

	return (
		<>
			<div>
				<p className="w-24 font-bold text-2xl  p-2 border border-blue-400 border-b-2 border-t-0 border-l-0 border-r-0 mb-6 ">Artigos</p>
			</div>
			<ul>
				{ data && data.map((v:IdataType,i) => {
					if(i >= props.lenghtData) {
						return ""
					}else {
						return router.route === `/post/${v.page}` ? "" : <li key={i} className="my-8 py-1 mr-4 border border-blue-400 border-b border-t-0 border-r-0 border-l-0">
							<Link href={`post/${v.page}`}>
							<a>
								<div className="w-52">
								<ReactMarkdown remarkPlugins={[remarkGfm]}>{v.img}</ReactMarkdown>
									</div>
							</a>
								</Link>
							<div className="text-bold my-2">{v.title}</div>
						</li>
					}
				}) }
			</ul>
		</>
	)
}

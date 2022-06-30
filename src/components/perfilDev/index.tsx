import React from "react";
import Link from "next/link";

export function PerfilDev() {
	return (
		<div className="font-light">
			<div>
				<img src="https://github.com/oscarjeremias.png" alt="foto do drv que criou o blog" width="150px" className="rounded-full border border-blue-400" />
			</div>
			<div className="my-4 py-3 border border-white border-t-0 border-r-0 border-l-0 border-b text-2xl">Oscar Jeremias jc</div>
			<div className="my-4 py-3 border birder-white border-t-0 border-r-0 border-l-0 border-b">
				Eu sou o Óscar jeremias um desenvolvedor front-end, que gosta de compartilhar conhecimento com a comunidade dev e tem com objetivo princípal da carreira melhor a experência do usuário na web
			</div>
			<div>
				<div>oscarjeremiasdev@gmail.com</div>
				<div>946703116</div>
				<Link href="https://www.linkedin.com/in/%C3%B3scar-jeremias-jc-356821235">
					<a target="_blank" className="text-blue-400">Linkedin</a>
				</Link>
				<br />
				<Link href="https://github.com/oscarjeremias">
					<a target="_blank" className="text-blue-400">Github</a>
				</Link>
                                <br />
                                <Link href="https://dev.to/oscarjeremiasdev">
					<a target="_blank" className="text-blue-400">Dev</a>
				</Link>
			</div>
		</div>
	)
}

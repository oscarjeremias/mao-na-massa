import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextMenu } from "../contexts/contextMenu";
import { ContextLogin } from "../contexts/contextLogin";
import { ContextUser } from "../contexts/contextUser";
import { useState,useEffect } from "react";
import Head from "next/head";
import icon from "../assests/icon.png";
import Script from 'next/script';

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  git:string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogado,setIsLogado] = useState<boolean>(false)
  const userFake = {
     _id: "",
     name: "",
     email: "",
     password: "",
     git: ""
  }
  const [user,setUser] = useState<IUser>(userFake)

  useEffect(() => {
    const isLogadoLocal = localStorage.getItem("isLogin")
    const userL = localStorage.getItem("user") || "{}"
    const userLocal = JSON.parse(userL)
    setIsLogado(isLogadoLocal == "true" && userLocal.name ? true : false)
    setUser(userLocal === undefined ? userFake : userLocal)
  },[])

  const [activeMenu,setActiveMenu] = useState<string>("not-active")
  return (
    <>
      <Script id='script'
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZYTR1L3LCP">
      </Script>

      <Script id='script'>{`
        window.dataLayer = window.dataLayer || []; 
       function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
        gtag('config', 'G-ZYTR1L3LCP'); `}
      </Script>
      <Head>
         <link rel="icon" type="image/x-icon" href={icon.src}></link>
      </Head>
    <ContextLogin.Provider value={{
      isLogado,
      setIsLogado
      }}>
      <ContextUser.Provider value={{
        user,
        setUser
        }}>
    <ContextMenu.Provider value={{
      activeMenu,
      setActiveMenu
      }}>
      <Component {...pageProps} />
    </ContextMenu.Provider>
    </ContextUser.Provider>
    </ContextLogin.Provider>
    </>
  )
}

export default MyApp

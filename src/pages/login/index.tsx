import React from "react";
import { Footer } from "../../components/footer";
import { LoginUser } from "../../components/login";
import { Cadastro } from "../../components/cadastro";
import { useState,useEffect } from "react";
import { ButtonMudarLoginParaCadastro } from "../../components/buttonMudarLoginParaCadastro";
import { Seo } from "../../components/seo";

export default function Login() {
  const [isLogin,setIsLogin] = useState<boolean>(false)
  const [url,setUrl] = useState<string>("")
  useEffect(() => {
    setUrl(window.document.URL)
  },[])
  return (
    <>
      <Seo title="Login" description="Faça login no melhot blog de programação do mundo" url={url}/>
    <div className="min-h-screen min-w-screen bg-blue-900 text-white">
      <div className="min-h-screen flex flex-col items-center gap-1 p-2.5">
      { isLogin === true ? <LoginUser /> : <Cadastro setIsLogin={setIsLogin} /> }
      <ButtonMudarLoginParaCadastro 
      isLogin={isLogin
      } setIsLogin={setIsLogin}/>
      </div>
    <Footer />
    </div>
    </>
  )
}

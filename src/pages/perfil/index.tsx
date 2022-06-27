import React from "react";
import { LayoutPageSecond } from "../../components/layoutPageSecond";
import { Back } from "../../components/back";
import { Footer } from "../../components/footer";
import { PerfilUser } from "../../components/perfilUser";
import { useState,useEffect } from "react";
import { Seo } from "../../components/seo";

export default function Perfil() {
  const [url,setUrl] = useState<string>("")
  useEffect(() => {
    setUrl(window.document.URL)
  },[])
  return (
    <>
      <Seo title="Perfil dos users" description="Perfil dos users" url={url}/>
    <LayoutPageSecond>
      <Back />
      <section className="min-h-screen mx-2.5 my-4 sm:w-3/4 sm:mx-auto">
        <PerfilUser />
      </section>
      <Footer />
    </LayoutPageSecond>
    </>
  )
}

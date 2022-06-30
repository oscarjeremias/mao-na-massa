import React from "react"
import { Back } from "../../components/back";
import { LayoutPageSecond } from "../../components/layoutPageSecond";
import { Footer } from "../../components/footer";
import { PerfilDev } from "../../components/perfilDev";
import { Seo } from "../../components/seo";
import { useState,useEffect } from "react" 

export default function About() {
  const [url,setUrl] = useState<string>("")
  useEffect(() => {
    setUrl(window.document.URL)
  },[])
  return (
    <>
      <Seo title="Oscar Jeremias jc" description="Tudo que voçê gostaria de saber sobre o desenvolvedor este Blog" url={url}/>
    <LayoutPageSecond>
      <Back />
      <section className="min-h-screen p-2.5 sm:w-3/4 sm:mx-auto">
        <PerfilDev />
      </section>
      <Footer />
    </LayoutPageSecond>
    </>
  )
}

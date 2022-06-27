import React from "react";
import { LayoutPageSecond } from "../../components/layoutPageSecond";
import { ListArtigos } from "../../components/listArtigos";
import { Footer } from "../../components/footer";
import { Back } from "../../components/back";
import { useState,useEffect } from "react"
import { Seo } from "../../components/seo";

export default function Artigos() {
  const [url,setUrl] = useState<string>("")
  useEffect(() => {
    setUrl(window.document.URL)
  },[])
  return(
    <>
      <Seo title="Lista de Artigos" description="Uma lista de tudos os artigos do blog" url={url}/>
  <LayoutPageSecond>
    <Back />
    <div className="min-h-screen px-2.5 py-4  flex flex-col justify-start sm:w-3/4 sm:mx-auto">
    <ListArtigos lenghtData={1000}/>
    </div>
    <Footer />
    </LayoutPageSecond>
    </>
  )
}

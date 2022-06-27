import React from "react"
import { LayoutPages } from "../components/layoutPages";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ButtonLogin } from "../components/buttonLogin";
import { ListArtigos } from "../components/listArtigos";
import { ContextLogin } from "../contexts/contextLogin";
import { useContext,useEffect,useState } from "react";
import { Seo } from "../components/seo";

function App() {
  const { isLogado } = useContext(ContextLogin) 
  const [url,setUrl] = useState<string>("")

  useEffect(() => {
    setUrl(window.document.URL)
  },[])
  return (
    <>
      <Seo title="Mão na Massa" description="O melhor Blog de programação do mundo" url={url} />
    <LayoutPages>
      <Header />
      <section className="min-h-screen flex flex-col items-center px-2.5 py-4 gap-4 sm:w-3/4 sm:mx-auto">
        <p className="font-bold text-3xl text-center">O melhor Blog de programação do mundo</p>
        { isLogado !== true ? <ButtonLogin /> : <div className="my-2"></div>}
        <div className="w-full justify-self-start">
          <ListArtigos lenghtData={9} />
        </div>
      </section>
      <Footer />
    </LayoutPages>
    </>
  )
}

export default App

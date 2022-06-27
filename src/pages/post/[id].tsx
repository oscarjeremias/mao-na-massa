import React from "react";
import axios from "axios";
import Head from "next/head";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { LayoutPages } from "../../components/layoutPages";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ButtonLogin } from "../../components/buttonLogin";
import { ContextLogin } from "../../contexts/contextLogin";
import { useContext,useState,useEffect } from "react";
import { Seo } from "../../components/seo";
import { InputComent } from "../../components/inputComent";
import { ListComents } from "../../components/listComents";
import { ListArtigos } from "../../components/listArtigos";


type IpageType = {
  id:string;
  page: string
  title: string
  description: string
  tags: string
  content: string
  foto:string
}

type IparamsType = {
  params: { id: string }
}

export default function Post(props: IpageType) {
  const { isLogado } = useContext(ContextLogin)
  const [url,setUrl] = useState<string>("")

  useEffect(() => {
    setUrl(window.document.URL)
  },[])
  return (
  <>
    <Seo 
      title={props.title} 
      description={props.description}
    url={url}
      foto={props.foto}
    />
    <Head>
     <meta name="tags" content={props.tags}/>
    </Head>
    <LayoutPages>
      <Header />
      <section className="section text-white min-h-screen flex flex-col justify-center items-center sm:w-3/4 sm:mx-auto">
      <div className="a mix-w-full">
        <ReactMarkdown rehypePlugins={[remarkGfm]}>
          { props.content }
        </ReactMarkdown>
      </div>
        <ListArtigos lenghtData={4} />
        { isLogado === true ? "" : <ButtonLogin />}
      <div className="self-start">
      <InputComent idPage={`${props.id}`}/> 
        <ListComents idPage={`${props.id}`}/>
      </div>
    </section>
      <Footer />
    </LayoutPages>
  </>
  )
}

export const getStaticPaths = async() => {
  const res = await axios(`${process.env.CMS_URL}`, {
    method: "post",
    data: {
      query: `
       query MyQuery {
           posts {
             page
           }
       }

      `
    } 
  })

  const paths = res.data.data.posts.map((page: IpageType) => {
    return { params: { id: page.page } }
    })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: IparamsType) {
  const res = await axios(`${process.env.CMS_URL}`, {
    method: "post",
    data: {
      query: `
       query MyQuery {
           posts {
            id
            page
            title
            description
            tags
            content
            foto
          }
       }

      `
    } 
  })
  const props = res.data.data.posts.find((page: IpageType) => {
    return page.page === params.id
  })

  return {
    props,
  }
}

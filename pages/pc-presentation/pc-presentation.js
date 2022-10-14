import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Carousel from '../../components/pc-presentation/carousel'
import Items from '../../components/pc-presentation/items.jsx'
import Navbar from '../../components/pc-presentation/navbar'
import styles from '../../styles/Home.module.css'


export default function Pc_Presentation() {
  const [lang, setLang] = useState("")
  const [product, setProduct] = useState("")
  
  
  useEffect((() =>{
    localStorage.getItem("lang") ? setLang(localStorage.getItem("lang")) : null
  }), [])
  
  useEffect((() =>{
    localStorage.setItem("lang", lang)
    localStorage.setItem("product", product)
  }), [lang, product])
  
   const resetProduct = () => {
    localStorage.setItem("product", "")
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <Navbar lang={lang} setLang={setLang} product={product} resetProduct={resetProduct} setProduct={setProduct}/>
        <Carousel lang={lang}  product={product}/>
        <Items lang={lang}  product={product}/>
        <footer className={styles.footer}>
        <a
          href="https://github.com/santiellis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Santiago Ellis
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

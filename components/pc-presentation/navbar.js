import Image from "next/image";
import favicon from "../../public/images/favicon.ico";
import React, { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar({lang, setLang , product, resetProduct ,setProduct}) {
  
 const redirectGithub = () => {
   location.href="https://github.com/santiellis"
};

  return (
    <div >
      <div className="flex-1 flex justify-evenly bg-red-600">
        <div>
          <a onClick={resetProduct} href="http://localhost:3000/pc-presentation/pc-presentation">
            <Image height={50} width={50} src={favicon} />
          </a>
        </div>
        <div className="flex-1 flex justify-evenly bg-red-600">
        
          <select className="px-8 bg-red-600 cursor-pointer" onChange={() => {
            setProduct(event.target.value)
        }}>
            <option hidden>{lang === "EN" ? "Products" : lang === "ES" ? "Producto" : "Products"}</option>
            <option className="cursor-pointer"  value="Keyboard">{lang === "EN" ? "Keyboard" : lang === "ES" ? "Teclados" : "Keyboard"}</option>
            <option className="cursor-pointer "  value="Mouse">{lang === "EN" ? "Mouse" : lang === "ES" ? "Mouse" : "Mouse"}</option>
            <option className="cursor-pointer"  value="Headphones">{lang === "EN" ? "Headphones" : lang === "ES" ? "Auriculares" : "Headphones"}</option>
            <option className="cursor-pointer"  value="Controllers">{lang === "EN" ? "Controllers" : lang === "ES" ? "Controles" : "Controllers"}</option>
            <option className="cursor-pointer"  value="Mousepads">{lang === "EN" ? "Mousepads" : lang === "ES" ? "Mousepads" : "Mousepads"}</option>
          </select>
        <button className="px-8">{lang === "EN" ? "Contact Us" : lang === "ES" ? "Contactanos" : "Contact Us"}</button>
        <button onClick={() => redirectGithub()} className="px-8">{lang === "EN" ? "About Us" : lang === "ES" ? "Acerca de nosotros" : "About Us"}</button>
        <select className="px-8 bg-red-600" onChange={(e) => {
            setLang(event.target.value)
        }}>
          <option selected={lang === "EN"} value="EN">English</option>
          <option selected={lang === "ES"} value="ES">Español</option>
        </select>
        <button className="px-8 bg-red-600" >
          <Link href="/">{lang === "EN" ? "Back to Main" : lang === "ES" ? "Regresar al inicio" : "Back to Main"}</Link>
        </button>
        
        </div>
      </div>
    </div>
  );
}

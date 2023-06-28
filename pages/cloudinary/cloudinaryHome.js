import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/cloudinaryHome.module.css"

export default function CloudinaryHome() {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
      try {
          const res = await axios.get(`${window.location.origin}/api/cloudinaryGetUrl`);
          setImageIds(res.data);
      } catch (err) {
          console.error(err);
      }
  };
  useEffect(() => {
      loadImages();
  }, []);

  return (
    <>
      <Head>
        <title>Cloudinary component</title>
      </Head>
      <main className={styles.main}>
      <div className={styles.container}>
        

      <h1 className={styles.title}>
        All images in my Cloudinary
      </h1>
      <div className={styles.grid}>
      {imageIds && imageIds.map((imageId, index) => (
         <div key={index}>
            {<Image width={"300px"} height={"300px"} className={styles.card} src={imageId} alt="" />}
         </div>
            ))}
      </div>
      <div className={styles.grid}>
      <div className="cursor-pointer">
        <Link href="cloudinaryAdd" className="cursor-pointer">
      <h2 className={styles.card}> 
          Add more images
      </h2>
        </Link>
</div>
        <div className="cursor-pointer">

        <Link href="/" className="cursor-pointer">
      <h2 className={styles.card}>
          Back to Main
      </h2>
        </Link>
        </div>
      </div>
      </div>
      </main>
    </>
  );
}

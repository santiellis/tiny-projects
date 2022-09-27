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
          const res = await axios.get(`${window.location.origin}/api/cloudinaryGet`);
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
            {<img className={styles.card} src={imageId} alt="" />}
         </div>
            ))}
      </div>
      <div className={styles.grid}>
      <h2 className={styles.card}> 
        <Link href="cloudinaryAdd">
          Add more images
        </Link>
      </h2>
      <h2 className={styles.card}>
        <Link href="/">
          Back to Main
        </Link>
      </h2>
      </div>
      </div>
      </main>
    </>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/cloudinaryAdd.module.css";
import Image from "next/image";

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [oldSelectedFile, setOldSelectedFile] = useState("");
  const handleFileInputChange = (e) => {
    try {
      console.log(e.target);
      if (e.target.files && e.target.files.length > 0) {
        const fileSize = e.target.files[0].size / 1024 / 1024; // in MiB
        const file = e.target.files[0];
        if (fileSize > 1) {
          alert("File size exceeds 1 MiB");
          // $(file).val(''); //for clearing with Jquery
        } else {
          // Proceed further
          setOldSelectedFile(file);
          previewFile(file);
          setSelectedFile(file);
          setFileInputState(e.target.value);
        }
      } else if (!e.target.value) {
        setSelectedFile(oldSelectedFile);
        setFileInputState(oldSelectedFile);
        alert("You did not select any image");
      }
    } catch (error) {
      alert("You did not select any image");
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (!selectedFile) return;
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      setUploading(true);
      await axios.post(`${window.location.origin}/api/cloudinaryUpload`, {
        data: reader.result,
      });

      setUploading(false);
      setFileInputState("");
      setPreviewSource("");
    };
    reader.onerror = (error) => {
      console.error(error);
    };
  };

  return (
    <div>
      <Head>
        <title>Cloudinary component</title>
      </Head>
      <main className={styles.main}>
        {uploading === false ? (
          <div className={styles.container}>
            <h1 className={styles.title}>Upload an Image</h1>
            <div className={styles.container}>
              {previewSource && (
                <Image
                  className={styles.card2}
                  height={300}
                  width={300}
                  src={previewSource}
                  alt="chosen"
                  // style={{ height: "300px" }}
                />
              )}
              <div  className={styles.grid}>
              <form onSubmit={handleSubmitFile}>
                <input
                  className={styles.card}
                  id="fileInput"
                  type="file"
                  name="image"
                  accept=".img,.png,.jpg,.ico,.jpeg"
                  onChange={handleFileInputChange}
                  defaultValue=""
                />
                <button type="submit">
                  Submit
                </button>
              </form>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.title}>Uploading...</div>
        )}
        <Link href="/cloudinary/cloudinaryHome">
          <button>Back to Home</button>
        </Link>
      </main>
    </div>
  );
}

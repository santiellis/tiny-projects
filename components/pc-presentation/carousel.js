import React, { useEffect, useState } from "react";
import styles from "../../styles/rainbow-line.module.css";

function Carousel({ lang, product }) {
  const arrayImage = [
    {
      image:
        "https://media.istockphoto.com/photos/trial-to-the-peak-in-tatra-mountains-picture-id1028150888?s=612x612",
      titleEN: "Mountains",
      titleES: "Montañas",
      descrEN: "Peak of the Tatra Mountains",
      descrES: "Pico de las Montañas Tatra",
    },
    {
      image:
        "https://media.istockphoto.com/photos/river-and-green-forest-in-tuchola-natural-park-aerial-view-picture-id1176297080?s=612x612",
      titleEN: "Green Forest",
      titleES: "Bosque Verde",
      descrEN: "River and green forest in Tuchola Natural Park",
      descrES: "Rio y bosque verde en el Parque Nacional Tuchola",
    },
    {
      image:
        "https://media.istockphoto.com/photos/vacations-in-poland-holiday-with-a-sailboats-by-the-lake-picture-id1143005194?s=612x612",
      titleEN: "Lake with a Boat",
      titleES: "Lago con un Bote",
      descrEN: "Vacation with sailboats in Poland",
      descrES: "Vacaciones con veleros en Polonia",
    },
  ];

  const [data, setData] = useState("");
  const [imageNumber, setImageNumber] = useState(0);

  // setData(arrayImage[imageNumber]) && imageNumber++ && console.log("hola")
  useEffect(() => {
    if (imageNumber >= arrayImage.length -1) {
      setTimeout(() => setImageNumber(0), 10000);
    } else {
      setTimeout(() => setImageNumber(imageNumber + 1), 10000);
    }

    setData(arrayImage[imageNumber]);
    // return () => clearTimeout(timer);
  }, [imageNumber]);

  return (
    <div className="flex-1 flex content-center justify-center w-100 h-100 m-5">
      <div className={styles.rainbowlineleft + "absolute bg-white"}></div>
      <div className={styles.rainbowlineright + "absolute bg-white"}></div>
      <div className="flex-1 flex content-center justify-center w-100 h-100 m-2">
        <div className="m-40  top-10 left-40 bg-black">
          <h1 className="text-red-600 overline decoration-red-600 uppercase font-semibold text-5xl tracking-widest leading-25 normal">
            {lang === "ES" ? data.titleES : data.titleEN}
          </h1>
          <p>{lang === "ES" ? data.descrES : data.descrEN}</p>
          <div className="flex-1 flex content-center justify-center">
            <button className="mx-3 my-2 bg-red-600 rounded-lg py-3 px-2">
              {lang === "ES" ? "Compra en Internet" : "Buy on Internet"}
            </button>
            <button className="px-2 my-2 rounded-lg border-slate-50 border-2">
              {lang === "ES" ? "Aprende mas" : "Learn More"}
            </button>
          </div>
        </div>
        <div className="z-40">
          <img
            className="object-none w-[400px] h-[400px] z-40 right-40 object-right"
            src={data.image}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;

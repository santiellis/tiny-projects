import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocalStorage } from "../../public/utils/hook";

function Items({lang, product}) {
  const arrayItems = [
    {
      image:
        "https://media.istockphoto.com/photos/trial-to-the-peak-in-tatra-mountains-picture-id1028150888?s=612x612",
      textEN: "Mountains",
      textES: "Montañas",
      descrEN:"Peak of the Tatra Mountains",
      descrES:"Pico de las Montañas Tatra",
    },
    {
      image:
        "https://media.istockphoto.com/photos/river-and-green-forest-in-tuchola-natural-park-aerial-view-picture-id1176297080?s=612x612",
      textEN: "Green Forest",
      textES: "Bosque Verde",
      descrEN:"River and green forest in Tuchola Natural Park",
      descrES:"Rio y bosque verde en el Parque Nacional Tuchola",
    },
    {
      image:
        "https://media.istockphoto.com/photos/vacations-in-poland-holiday-with-a-sailboats-by-the-lake-picture-id1143005194?s=612x612",
      textEN: "Lake with a Boat",
      textES: "Lago con un Bote",
      descrEN:"Vacation with sailboats in Poland",
      descrES:"Vacaciones con veleros en Polonia",
    },
  ];

  return (
    <div className="flex-1 flex justify-center m-5">
      { arrayItems.map((item, index) => {
        return (
          <div key={index} className="relative h-[300px] m-5">
            <img className="w-80 h-80" src={item.image} />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-600 opacity-70">
              <h3 className="text-x1 text-red font-bold">
                {lang === "ES" ? item.textES : item.textEN}
              </h3>
              <p className="mt-2 text-sm text-gray-300">
              {lang === "ES" ? item.descrES : item.descrEN}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;

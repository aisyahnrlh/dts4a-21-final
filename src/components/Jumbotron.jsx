import axios from "axios";
import React, { useState, useEffect } from "react";

function Jumbotron() {
  const [item, setItem] = useState({});

  useEffect(() => {
    const random = Math.trunc(Math.random() * 20);

    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=8f36069a9795f7f206d4468e8d301b57"
      )
      .then((res) => {
        const { results } = res.data;
        setItem(results[random]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      className="w-screen h-screen bg-cover flex items-end p-8"
      style={{
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(
        //   "https://image.tmdb.org/t/p/original/${item.backdrop_path}"
        // )`,
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${item.backdrop_path}"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="w-2/4"> */}
      <div className="w-full md:w-2/3 xl:w-2/4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-relaxed font-semibold">
          {item.original_title || item.original_name}
        </h1>
      </div>
    </section>
  );
}

export default Jumbotron;

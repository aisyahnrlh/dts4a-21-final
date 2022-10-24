import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, ubahNama } from "../features/counter/slice";
import Jumbotron from "../components/Jumbotron";
import TopNews from "../components/TopNews";
import Trending from "../components/Trending";

function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <section className="bg-black">
      <Jumbotron />
      <Trending />
      <TopNews />
      {/* <h1>Home</h1>
      <p>Hello, {user}</p>
      <input
        type="text"
        onChange={(e) =>
          // dispatch({ type: "UBAH_NAMA", payload: e.target.value })
          dispatch(ubahNama(e.target.value))
        }
      /> */}
    </section>
  );
}

export default Home;

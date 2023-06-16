import { React, useState } from "react";
import useGif from "../hooks/useGif";
const Random = () => {
  const [tag, setTag] = useState("");

  const { meme, load, getData } = useGif(tag);

  return (
    <div className="border w-[500px] px-10 mx-auto flex justify-center flex-col ">
      <h1 className=" text-bold text-2xl p-5">Memes</h1>
      <div className="flex justify-cente">
        {load ? (
          <div class="lds-hourglass"></div>
        ) : (
          <img src={meme} alt="img" />
        )}
      </div>

      <input
        className=" text-gray-950 text-center mt-6"
        type="text"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        placeholder="Search"
      />

      <button
        onClick={() => {
          getData(tag);
        }}
        className="text-bold text-2xl p-5"
      >
        Genarate Memes
      </button>
    </div>
  );
};

export default Random;

import { React } from "react";
import useGif from "../hooks/useGif";

const Random = () => {
  const { meme, load, getData } = useGif();

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

      <button
        onClick={() => {
          getData();
        }}
        className="text-bold text-2xl p-5"
      >
        Genarate Memes
      </button>
    </div>
  );
};

export default Random;

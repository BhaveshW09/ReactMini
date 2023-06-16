import { React } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <>
      <div className=" text-center flex justify-center flex-col">
        <div className="border mx-5 my-8">
          <h1 className=" text-bold text-2xl p-5">Random Meme Genrator</h1>
        </div>

        <div className=" flex flex-col gap-5">
          <Random />
          <Tag />
        </div>
      </div>
    </>
  );
};

export default App;

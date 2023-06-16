import { useEffect, useState } from "react";
import Axios from "axios";

let API = "ViKvQpbIitxdOesgLH4RRXekjkSy1XNe";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API}`;

const useGif = (tag) => {
  const [meme, setMeme] = useState("");
  const [load, setLoad] = useState(false);

  const getData = async (tag) => {
    setLoad(true);

    const { data } = await Axios.get(tag ? `${url}&tag=${tag}` : `${url}`);
    const response = data.data.images.downsized_large.url;
    setMeme(response);
    setLoad(false);
  };
  useEffect(() => {
    getData(tag);
  }, []);

  return { meme, load, getData };
};

export default useGif;

// can i wite like this this is just for checking nothing is very serious about this and now ill be like some issues will be coming soons ans after one month rail will be start and everything will be so nice and peace full so if i am going to try whatever i want to so simply can't do that because there is some restriction and i dont want that and thats why i am not giving and thats the only issue that i am facing ootherwise everything will be alright and that why i used to create my green light recently i have purchased a keyaboard and itts not working prooperly its like the keys are very

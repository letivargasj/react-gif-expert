import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFilterGift = async () => {
      const newGif = await getGifs(category);
      setGif(newGif);
    };
    getFilterGift(category);
    setIsLoading(false);
  }, []);

  return {
    gif,
    isLoading,
  };
};

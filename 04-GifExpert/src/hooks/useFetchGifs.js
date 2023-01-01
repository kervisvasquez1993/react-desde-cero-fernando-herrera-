import { useEffect, useState } from "react";
import { GifEffectApp } from "../helpers/GifEffectApp";

const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const saveImage = async () => {
        const img = await GifEffectApp(category)
        setImages(img)
        setIsLoading(true)
    };
    useEffect(() => {
        saveImage();
    }, [category])
  return {
    images : images,
    isLoading : isLoading
  }
}

export default useFetchGifs

    
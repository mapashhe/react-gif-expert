import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    // 1- crea el componente y le asigna un estado, pinta el componente
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    //2 -trae las imagenes y modifica los estados, lanza render al final
    const getImages = async() => {
        const imagenes = await getGifs(category);
        setImages(imagenes);
        setIsLoading(false);
    }

    // 1.2- se ejecutara al crearse el componente
    useEffect( () => {
        getImages()
    }, [])


  return {
    images,
    isLoading
  }
  
}

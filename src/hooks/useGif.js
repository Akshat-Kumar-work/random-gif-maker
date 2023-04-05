import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_GIPHY_API_KEY; 

const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
const useGif= (tag)=>{
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;
    const [gif , setGif] = useState('');
    const [loading , setloading] = useState('false')


    async function fetchData (tag){
        setloading(true);
        const {data} =  await axios.get(tag? (tagUrl):(randomUrl));
       const imageSource = data.data.images.downsized_large.url;
       setGif(imageSource)
       setloading(false)
    }

    useEffect( ()=>{
        fetchData()
    },[])
   
    //ek array ki form m gif , loading , fetchdata ki value daldi , aur esko hum object ki form m bhi return kr skty hai
    return [gif, loading,fetchData]
}


export default useGif;
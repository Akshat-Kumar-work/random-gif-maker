import {  useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner"
 

function Tag(){ 

    const [tag , settag] = useState('')

    //use gif naam k custom hook se value use kr rhe hai
const {gif, loading , fetchData} = useGif(tag);

    function clickHandler(){
    
        fetchData(tag)
    }
    
    function changeHandler(event){
        settag(event.target.value)
    }
return(
    <div className=" w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5
    mt-[15px] ">
            <h1 className=" text-2xl underline uppercase font-bold mt-[15px] ">Random {tag} Gif</h1>
            {loading? (<Spinner></Spinner>):(<img src={gif} width="450"/>)}
            
            <input className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={changeHandler} value={tag} placeholder="enter tag to generate random gif"></input>

            <button onClick={clickHandler} className=" w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
)
}
export default Tag;
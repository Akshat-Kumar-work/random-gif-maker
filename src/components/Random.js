
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";
 



function Random(){

//use gif naam k custom hook se value use kr rhe hai
const {gif, loading , fetchData} = useGif();

    function clickHandler(tag){
        fetchData()
    }
    
return(
    <div className=" w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5
    mt-[15px] ">
            <h1 className=" text-2xl underline uppercase font-bold mt-[15px] ">A Random Gif</h1>
            {loading? (<Spinner></Spinner>):(<img src={gif} width="450"/>)}
            
            <button onClick={clickHandler} className=" w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
)
}
export default Random;
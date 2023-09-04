import React, {useRef, useState} from 'react'
import default_image from '/butterfly.jpg'

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const imageGenerator = async () =>{
        if (inputRef.current.value===""){
            return 0;
        }
        setLoading(true);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
                },
                body:JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n:1,
                    size:"512x512",
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }

    return(
        <div className="AI_Image_Generator">
            <div className="Header text-slate-50 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black pt-10">AI Image <span className="generatorSpan text-sky-400">Generator</span></div>

            <div className="inputField flex justify-around items-center w-10/12 mb-5 lg:w-5/12 sm:w-3/5 h-7 sm:h-8 md:h-8 lg:h-12 bg-white mt-8 rounded-md m-auto">
                <input type="text" ref={inputRef} id='form' className="Input pl-2 outline-none bg-transparent rounded-md w-11/12 lg:w-3/4 mr-2 text-black text-xs lg:text-lg xl:text-xl 2xl:text-xl"  placeholder="Describe what you want to see" />
                <div className="generateBtn text-black bg-sky-500 w-24 lg:w-3/12 h-7 sm:h-8 md:h-8 lg:h-12 flex justify-center items-center text-xs lg:text-base xl:text-xl 2xl:text-xl font-bold rounded-r-md cursor-pointer hover:bg-sky-600" onClick={()=>{imageGenerator()}} >Generate</div>
            </div>

            <div className="image_loading flex-col">
            <div className="img_div flex justify-center">
                <img src={image_url==="/"?default_image:image_url} alt="" className=" w-10/12 mt-3 mb-7 sm:w-7/12 lg:w-5/12"/></div>
                <div className="loading">
                    <div className={loading?"loading-text flex justify-center text-xs":"display-none hidden"}>Loading...</div>
                    <div className={loading?"loading-bar-full w-12/12 h-1 bg-white m-auto ":"loading-bar w-0"}></div>
                </div>
        </div>
        </div>
    )
}

export default ImageGenerator
import React from 'react'

const Input= () => {
    
    return(
        <div className="inputField flex justify-around items-center w-10/12 lg:w-7/12 sm:w-3/5 h-7 sm:h-8 md:h-8 lg:h-12 bg-white mt-8 rounded-md m-auto">
            <input type="text" className="Input pl-2 outline-none bg-transparent rounded-md w-11/12 lg:w-3/4 mr-2 text-black text-xs lg:text-lg xl:text-xl 2xl:text-xl"  placeholder="Describe what you want to see" />
            <div className="generateBtn text-black bg-sky-500 w-24 lg:w-3/12 h-7 sm:h-8 md:h-8 lg:h-12 flex justify-center items-center text-xs lg:text-base xl:text-xl 2xl:text-xl font-bold rounded-r-md cursor-pointer hover:bg-sky-600" >Generate</div>
        </div>
    )
}

export default Input
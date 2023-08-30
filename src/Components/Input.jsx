import React from 'react'

const Input= () => {
    
    return(
        <div className="inputField flex justify-around items-center w-6/12 h-10 bg-white mt-8 rounded-md m-auto">
            <input type="text" className="Input pl-2 outline-none bg-transparent rounded-md w-3/4 mr-9 text-black"  placeholder="Describe what you want to see" />
            <div className="generateBtn text-black bg-sky-500 w-52 h-10 flex justify-center items-center text-xl font-semibold rounded-r cursor-pointer hover:bg-sky-600" >Generate</div>
        </div>
    )
}

export default Input
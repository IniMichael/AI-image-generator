import React from 'react'

const Image= () => {
    return(
        <div className="image_loading flex-col">
            <div className="img_div flex justify-center">
                <img src="./src/assets/butterfly.jpg" className=" w-10/12 mt-3 sm:w-7/12 lg:w-7/12"/>
            </div>
        </div>
    )
}

export default Image
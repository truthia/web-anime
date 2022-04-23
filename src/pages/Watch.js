import React, { useState } from 'react'
import Ripples from 'react-ripples'

const Watch = () => {
    const [server, setserver] = useState(1)

    return (
        <div className="bg-gray-600 w-pageWidth  mx-auto 
        ">
            <div className="w-pageWidth bg-black mt-5 ">
                <p className="text-2xl text-green-400 py-2 ml-4">Best Anime ever</p>
            </div>
            <div className="container p-5 ">
                {
                    server===1?
                    ( <div><iframe width="960" height="540" src="https://short.ink/HuHduPD9wn" frameborder="0" scrolling="0" allowfullscreen></iframe>
                    </div>):
                    server===2?
                    <div><iframe width="960" height="540" src="//mixdrop.bz/e/l6r09x7gt4ndz3" scrolling="no" frameborder="0" allowfullscreen="true"></iframe></div>
                    :null
                }
               <hr className="mt-5 border-2 border-green-400" />
                <div className="mt-3 flex items-center">
                    <span className="text-white">Chọn Server: </span>
                    <Ripples className="ml-5">
                        <button className="bg-green-500 text-white  px-4 py-2  rounded-md hover:bg-green-600  transition-all" onClick={()=>{setserver(1)}}>Abyss</button>
                    </Ripples>
                    <Ripples className="ml-2">
                        <button className="bg-green-500 text-white  px-4 py-2  rounded-md hover:bg-green-600  transition-all"
                        onClick={()=>{setserver(2)}}>Mixdrop</button>
                    </Ripples>
                </div>
            </div>
           

        </div>
    )
}

export default Watch

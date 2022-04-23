import React, { useEffect, useRef, useState } from 'react'
import play from "../assets/overlay_rich.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Card = (props) => {
    
    const [isHovered, setisHovered] = useState(false)
    const [position, setposition] = useState({})

    const desRef = useRef(null)

    useEffect(()=>{
        desRef.current.style.left=`${position.x+10}px`
        desRef.current.style.top=`${position.y+10}px`
    },[position])

    const hoverHandler= (event)=>{
        setisHovered(true)
        setposition({x:event.clientX,y:event.clientY})
       
    }

    return (
        <div className="group relative " onMouseMove={hoverHandler} onMouseLeave={()=>setisHovered(false)}>
            <Link to="/watch" >
                <div id="description" ref={desRef} className={`fixed bg-white h-cardHeight w-cardWidth z-20 ${isHovered&&props.type!=="incoming"?"visible":"invisible"}`}>
                    Description here
                </div>
                <img id="play" className=" opacity-0 absolute group-hover:opacity-100 z-10 object-contain py-14 px-9 cursor-pointer transition-all" src={play} />
                <div id="luot-xem" className="text-xs absolute z10 text-white bg-green-600 px-3">
                    <FontAwesomeIcon icon={faEye} />
                    <span>1203</span>
                </div>
                <div id="so-tap" className="absolute px-3 top-40 left-2 bg-blue-600 text-white rounded">80/80</div>
                <div id="img-background" className="absolute bg-gray-500 h-cardHeight w-cardWidth opacity-0 group-hover:opacity-30"></div>
                <img className="object-cover h-cardHeight w-cardWidth  " src={props.image} />
                <div id="ten" className="text-center text-md bg-white">Best anime</div>
            </Link>
        </div>
    )
}

export default Card

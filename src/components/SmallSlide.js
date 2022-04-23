import Ripples from 'react-ripples'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Card from './Card'
import { useEffect, useRef, useState } from 'react'

const SmallSlide = () => {

    const listRef=useRef(null)

    const [slideNumber, setslideNumber] = useState(0)

    useEffect(()=>{
        listRef.current.style.transform=`translateX(${-165*slideNumber}px)`
    },[slideNumber])


    const handleLeft =()=>{
        if(slideNumber>0)
        setslideNumber((prev)=>prev-1)
    }
    const handleRight=()=>{
        if(slideNumber<6)
        setslideNumber((prev)=>prev+1)
    }

    return (
        <div className= " relative px-smallSlidePaddingX pt-3">
            <div className="overflow-hidden">
               <div className="absolute z-10 bg-gray-500 bg-opacity-70 mt-12 rounded-r-xl " style={{height:"100px"}}
            
            >
                <Ripples>
                    <span className="px-3 py-9 cursor-pointer text-xl text-green-300 select-none bg-opacity-0"  onClick={handleLeft} >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                </Ripples>
            </div>
            <div className="flex justify-start  gap-cardGap w-smallSlideWidth transition-all mb-3" ref={listRef}>
             
         
                <Card type="incoming"  image="https://i.pinimg.com/originals/62/05/d4/6205d4682dc082515704f17a17a38430.png"/>
                <Card type="incoming"   image="https://wallpaper.dog/large/20498987.jpg" />
                <Card type="incoming"   image="https://wallpaperaccess.com/full/5638700.jpg" />
                <Card type="incoming"   image="https://esquilo.io/wallpaper/wallpaper/20210703/mobile-wallpapers-anime-mobile-4k-anime-women-wallpapers-wallpaper-preview.webp" />
                <Card type="incoming"   image="https://images.wallpaperscraft.com/image/single/girl_umbrella_anime_141156_225x300.jpg" />
                <Card type="incoming"   image="https://1.bp.blogspot.com/-I5ZpDbeGOcE/X7JJ81j3h7I/AAAAAAAANr8/62-hB0Wii-YNMoOCOOrL10isi1Fgo2XKgCLcBGAsYHQ/s1920/itachi.jpg" />
                <Card type="incoming"   image="https://www.mordeo.org/files/uploads/2018/09/Anime-Girl-Warrior-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg" />
                <Card type="incoming"   image="https://img.thuthuatphanmem.vn/uploads/2018/10/19/cute-anime-wallpaper_035409724.jpg" />
                <Card type="incoming"    image="https://wallpaper.dog/large/10877875.jpg"/>
                <Card type="incoming"   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafNU9BQYoukWidOlt_WkTpSP4pVfpusgVBA&usqp=CAU" />
                <Card type="incoming"   image="https://wallpaperaccess.com/full/1762310.jpg" />
                <Card type="incoming"   image="https://m.mycoolwalls.com/wp-content/uploads/2021/05/Anime-Mobile-Wallpaper.jpg" />
             
            </div>
            <div className="absolute z-10 bg-gray-500 bg-opacity-70 right-buttonRight top-0 rounded-l-xl mt-14" style={{height:"100px"}}
            > 
                <Ripples>
                    <span className="px-3 py-9 cursor-pointer text-xl text-green-300 select-none bg-opacity-0"  onClick={handleRight}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </Ripples>
            </div>
            </div>
        </div>
    )
}

export default SmallSlide

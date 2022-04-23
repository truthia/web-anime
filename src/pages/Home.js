import React from 'react'
import AnimeList from '../components/AnimeList'
import BigSlide from '../components/BigSlide'
import Chart from '../components/Chart'
import SmallSlide from '../components/SmallSlide'

const Home = () => {
    return (
            <div className="w-pageWidth mx-auto">
                <BigSlide />
                <div className="bg-gray-100">
                    <p className="text-2xl text-white text-center bg-green-600 py-2">
                    &#9734;	&#9734;	&#9734; Phim sắp chiếu 	&#9734;	&#9734;	&#9734;
                    </p>
                    <SmallSlide />
                   
                </div >
                <div className="grid grid-cols-12">  
                    <div className=" bg-gray-100 col-span-9">
                        <p className="text-2xl text-white text-center bg-green-600 py-2">
                            &#9734;	&#9734;	&#9734; Anime 	&#9734;	&#9734;	&#9734;
                            </p>
                            <AnimeList />
                    </div>
                    <div className="bg-gray-600 col-span-3">
                    <p className="text-2xl text-white text-center bg-green-600 py-2">
                            &#9734;	&#9734;	&#9734; BXH 	&#9734;	&#9734;	&#9734;
                            </p>
                            <Chart />
                    </div>
                </div>
               

            </div>
    )
}

export default Home

import { useEffect, useRef, useState } from "react"
import Ripples from "react-ripples"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const featuredAnime=[
    {
        _id:"123",
        name:"Kimetsu no Yaiba",
        img:"https://wallpaperaccess.com/full/6319352.jpg",
        episodes:"25/25",
        describe:"Hiiragi Seiichi là một kẻ xấu xí xấu xí, đáng ghét, bẩn thỉu đây là những lời châm biếm ném vào anh ta một cái khác về sự xuất hiện của anh ta. Đó là cuộc sống hằng ngày của Seiichi về bắt nạt, vì lý do nào đó, một ngày nào đó khi trường học ra đời, một tiếng nói rằng chính là một Thượng Đế đã nói qua hệ thống PA để chuẩn bị được đưa tới một thế giới khác. Hơn nữa, không phải Seiichi một mình, mà cả trường học. Một thế giới tưởng tượng nơi các yếu tố giống như trò chơi như cấp độ, số liệu thống kê, và kỹ năng tồn tại. Tuy nhiên, Đức Chúa Trời vẫn còn đang chuẩn bị để hoàn thành việc chuyển giao, và sẽ gửi chúng ngay khi lễ nghi triệu tập anh hùng đã sẵn sàng. Các lớp học tất cả các nhóm hình thành để chờ đợi cho việc chuyển nhượng, nhưng Seiichi một mình đã được loại bỏ và như vậy đã được triệu tập đến một khu vực khác nhau. Sau khi được vận chuyển, điều đầu tiên Seiichi đã ăn là . Điều này sẽ làm thay đổi cuộc sống của anh ấy ---- Câu chuyện này nói về Seiichi đã bị những bạn học của mình bắt nạt, thậm chí không được công nhận vì những thành tựu của mình, và mặc dù tất cả vẫn tồn tại và sống sót trong thế giới mới này. Kết quả là, ông bằng cách nào đó trở thành một trong những nhà vô địch."
    },
    {
        _id:"456",
        name:"?",
        img:"https://images.hdqwalls.com/download/anime-ninja-4k-lo-1366x768.jpg",
        episodes:"25/25",
        describe:"Hiiragi Seiichi là một kẻ xấu xí xấu xí, đáng ghét, bẩn thỉu đây là những lời châm biếm ném vào anh ta một cái khác về sự xuất hiện của anh ta. Đó là cuộc sống hằng ngày của Seiichi về bắt nạt, vì lý do nào đó, một ngày nào đó khi trường học ra đời, một tiếng nói rằng chính là một Thượng Đế đã nói qua hệ thống PA để chuẩn bị được đưa tới một thế giới khác. Hơn nữa, không phải Seiichi một mình, mà cả trường học. Một thế giới tưởng tượng nơi các yếu tố giống như trò chơi như cấp độ, số liệu thống kê, và kỹ năng tồn tại. Tuy nhiên, Đức Chúa Trời vẫn còn đang chuẩn bị để hoàn thành việc chuyển giao, và sẽ gửi chúng ngay khi lễ nghi triệu tập anh hùng đã sẵn sàng. Các lớp học tất cả các nhóm hình thành để chờ đợi cho việc chuyển nhượng, nhưng Seiichi một mình đã được loại bỏ và như vậy đã được triệu tập đến một khu vực khác nhau. Sau khi được vận chuyển, điều đầu tiên Seiichi đã ăn là . Điều này sẽ làm thay đổi cuộc sống của anh ấy ---- Câu chuyện này nói về Seiichi đã bị những bạn học của mình bắt nạt, thậm chí không được công nhận vì những thành tựu của mình, và mặc dù tất cả vẫn tồn tại và sống sót trong thế giới mới này. Kết quả là, ông bằng cách nào đó trở thành một trong những nhà vô địch."
    },
    {
        _id:"789",
        name:"!",
        img:"https://img5.goodfon.com/wallpaper/nbig/9/21/girl-anime-wallpapers-anime-girl.jpg",
        episodes:"25/25",
        describe:"Hiiragi Seiichi là một kẻ xấu xí xấu xí, đáng ghét, bẩn thỉu đây là những lời châm biếm ném vào anh ta một cái khác về sự xuất hiện của anh ta. Đó là cuộc sống hằng ngày của Seiichi về bắt nạt, vì lý do nào đó, một ngày nào đó khi trường học ra đời, một tiếng nói rằng chính là một Thượng Đế đã nói qua hệ thống PA để chuẩn bị được đưa tới một thế giới khác. Hơn nữa, không phải Seiichi một mình, mà cả trường học. Một thế giới tưởng tượng nơi các yếu tố giống như trò chơi như cấp độ, số liệu thống kê, và kỹ năng tồn tại. Tuy nhiên, Đức Chúa Trời vẫn còn đang chuẩn bị để hoàn thành việc chuyển giao, và sẽ gửi chúng ngay khi lễ nghi triệu tập anh hùng đã sẵn sàng. Các lớp học tất cả các nhóm hình thành để chờ đợi cho việc chuyển nhượng, nhưng Seiichi một mình đã được loại bỏ và như vậy đã được triệu tập đến một khu vực khác nhau. Sau khi được vận chuyển, điều đầu tiên Seiichi đã ăn là . Điều này sẽ làm thay đổi cuộc sống của anh ấy ---- Câu chuyện này nói về Seiichi đã bị những bạn học của mình bắt nạt, thậm chí không được công nhận vì những thành tựu của mình, và mặc dù tất cả vẫn tồn tại và sống sót trong thế giới mới này. Kết quả là, ông bằng cách nào đó trở thành một trong những nhà vô địch."
    }
]
const BigSlide = () => {

    const [slideNumber, setslideNumber] = useState(0);

    const listRef=useRef(null);

    useEffect(()=>{
        listRef.current.style.transform=`translateX(${-1000*slideNumber}px)`
        console.log(slideNumber)
    },[slideNumber])

    const handleLeft=()=>{
        if(slideNumber>0)
        setslideNumber((prev)=>prev-1)
    }
    const handleRight=()=>{
        if(slideNumber<featuredAnime.length-1)
        setslideNumber((prev)=>prev+1)
       
    }

    return (
        <div className="overflow-x-hidden relative" >
            
            <div className="absolute z-10 bg-gray-500 bg-opacity-70 rounded-r-xl " style={{height:"100px" , marginTop:"220px"}}
            
            >
                <Ripples>
                    <span className="px-3 py-9 cursor-pointer text-xl text-green-300 select-none bg-opacity-0" onClick={handleLeft}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                </Ripples>
            </div>
            <ul className="flex flex-row transition-all" style={{width:"3000px"}} ref={listRef}>
                {featuredAnime.map(anime=>{
                    return (
                    <li   style={{height:"550px",maxWidth:"1000px",minWidth:"1000px"}} className="w-pageWidth flex-grow cursor-pointer
                    "  key={anime._id}
                    >
                        <img className="w-pageWidth"  style={{maxHeight:"550px",minHeight:"550px",maxWidth:"1000px",minWidth:"1000px"}}  src={anime.img} alt="anime" />
                        <div className="descrip relative text-sm -top-1/2 ml-16 h-2/5 w-72 p-4 pt-2 bg-black bg-opacity-70 rounded-xl">
                            <p className="text-center text-yellow-700 text-xl font-bold">{anime.name}</p>
                            <div id="ep" className="text-center text-green-600">Tập: {anime.episodes}</div>
                            <div id="des" className="text-center text-white h-4/5 overflow-hidden">{anime.describe}</div>
                        </div>
                    </li>
                    )
                })}
            </ul>
            <div className="absolute z-10 bg-gray-500 bg-opacity-70 right-0 top-0 rounded-l-xl" style={{height:"100px" , marginTop:"220px"}}
            > 
                <Ripples>
                    <span className="px-3 py-9 cursor-pointer text-xl text-green-300 select-none bg-opacity-0" onClick={handleRight}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </Ripples>
            </div>
        </div>
    )
}

export default BigSlide

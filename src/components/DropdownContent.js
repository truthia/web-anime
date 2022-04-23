import { useRef } from "react";
import Ripples from "react-ripples"
import { Navigate, useNavigate } from "react-router-dom";

const animeMua=["Mùa Đông 2021",
    "Mùa Thu 2021",
    "Mùa Hè 2021",
    "Mùa Xuân 2021",
    "Mùa Đông 2020",
    "Mùa Thu 2020",
    "Mùa Hè 2020",
    "Mùa Xuân 2020",
   " Mùa Đông 2019",
   " Mùa Thu 2019",
   " Mùa Hè 2019",
   " Mùa Xuân 2019",
   " Mùa Đông 2018",
   " Mùa Thu 2018",
   " Mùa Hè 2018",
   " Mùa Xuân 2018",
   " Mùa Đông 2017",
   " Mùa Thu 2017",
   " Mùa Hè 2017",
   " Mùa Xuân 2017",
   " Mùa Đông 2016",
   " Mùa Thu 2016",
   " Mùa Hè 2016",
   " Mùa Xuân 2016",
   " Mùa Đông 2015",
   " Mùa Thu 2015",
   " Mùa Hè 2015",
   " Mùa Xuân 2015",
   " Mùa Đông 2014",
   " Mùa Thu 2014",
   " Mùa Hè 2014",
   " Mùa Xuân 2014",
   " Mùa Đông 2013",
   " Mùa Thu 2013",
   " Mùa Hè 2013",
   " Mùa Xuân 2013",
   " Mùa Đông 2012",
   " Mùa Thu 2012",
   " Mùa Hè 2012",
   " Mùa Xuân 2012",
   " Mùa Đông 2011",
   " Mùa Thu 2011",
   " Mùa Hè 2011",
   " Mùa Xuân 2011",
   " Mùa Đông 2010",
   " Mùa Thu 2010",
   " Mùa Hè 2010",
   " Mùa Xuân 2010"];
   const theLoai= [
    "Hành Động",
    "Phiêu Lưu",
    "Học Đường",
    "Hài hước",
    "Đời thường",
    "Trinh Thám",
    "Drama",
    "Ecchi",
    "Harem",
    "Giả Tưởng",
    "Hikikomori",
    "Lịch sử",
    "Kinh dị",
    "Phép thuật",
    "Mecha",
    "Music",
    "Bỉ ẩn",
    "Tâm Lý",
    "Tình Yêu",
    "Vũ trụ",
    "Thể thao",
    "Tragedy",
    "Ma Cà Rồng",
    "Siêu Nhiên",
    "Shoujo Ai",
    "Shounen Ai",
    "Yuri",
    "Yaoi",
    "Shoujo",
    "Shounen",
    "Tokusatsu",
    "Thriller",
    "Siêu năng lực",
    "Kids",
    "Game",
    "Hoán Đổi Giới Tính",
    "Đấu Súng",
    "Josei",
    "Kemonomimi",
    "Võ Thuật",
    "Quân Đội",
    "Ninja",
    "Parody",
    "Police",
    "Samurai",
    "Viễn Tưởng",
    "Bạo Lực",
    "Du Hành Thời Gian",
    "Cartoon",
    "Ác Quỷ",
    "Thiên Thần",
    "Seinen",
    "Đua xe",
    "Isekai",
    "Dementia"
   ]
   const TV=["Đăng Nhập","Đăng Ký"]
const DropdownContent = (props) => {
    const navigate=useNavigate();
    const liRef = useRef(null)
    const onClickHandler= (item)=>{

        switch(item){
            case "Đăng Nhập":
                navigate("/login",{replace:false});
            break;
            case "Đăng Ký":
                navigate("/register",{replace:false});
        }
    }
    return (
        <div className="block mx-auto">
            <ul className={`grid grid-cols-${props.content==="tv"?"2":"4"} text-white`} >
                {(props.content==="mua"?animeMua:props.content==="tl"?theLoai:props.content==="tv"?TV:[]).map((item,indx)=>{
                    return (
                        <Ripples 
                        onClick={()=>onClickHandler(item)}
                        key={indx}
                        className="py-2 cursor-pointer hover:bg-yellow-600">
                        <li className="mx-auto" 
                            ref={liRef}
                           
                        >{item}</li>
                        </Ripples>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default DropdownContent

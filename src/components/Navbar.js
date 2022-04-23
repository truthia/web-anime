import { useEffect, useRef, useState } from "react"
import Ripples from "react-ripples"
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"

const Navbar = () => {

    const [dropdown, setdropdown] = useState("")
    const [open, setopen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const listener=(event)=>{
            if(!dropdownRef&&dropdownRef.current.contain(event.target))
            return;
            setdropdown("");
            setopen(false)
        }
        window.addEventListener("click",listener);
        return () => {
            window.removeEventListener("click",listener)
        }
    }, [open])

    const handleDropdown=(e)=>{
        //neu bam home thi reset
        if(e.target.id==="home"){
            setdropdown("");
            setopen(false)
        }
         //click 2 lan thi tat
        else if(open&& dropdown===e.target.id){
            setopen(false);
            setdropdown("");
      
        }
       //active dropdown
        else{
            setdropdown(e.target.id);
            setopen(true)
        }
    }

    return (
      <div className="bg-gray-800">
        <div className=" bg-black">
            <ul className="grid grid-cols-4 w-pageWidth mx-auto">
                <li className="">
                    <img src="https://animetvn.com/images/logo.png" />
                </li>
                <li className="col-span-2 flex">
                    <input id="search-bar" className="shadow w-full h-15 rounded-xl pl-3 mb-0 mt-1 focus:outline-none border-2 focus:border-green-500" placeholder="Tìm anime"/>
                    <button className="rounded-xl bg-blue-600 -ml-10 mt-1.5 h-8 w-8 ">
                        Tìm
                    </button>
                </li>
                <li className=" col-span-1  my-auto">
                <Ripples>
                    <p id="tv" className={`py-2.5 px-5  bg-${dropdown=="tv"?"green-500":null} text-white cursor-pointer transition-all hover:shadow-inner hover:bg-green-500`}onClick={handleDropdown}>Thành Viên</p></Ripples>
                </li>
            </ul>
            
            <ul className="flex flex-nowrap justify-start text-white w-pageWidth mx-auto bg-black text-sm select-none">
              <Link to="/">
                <Ripples>
                  <li id="home" className="py-2.5 px-5 cursor-pointer transition-all shadow-inner bg-green-500" 
                  onClick={handleDropdown}>HOME</li>
                </Ripples>
              </Link>
              <Ripples>
                <li id="mua" className={`py-2.5 px-5 cursor-pointer transition-all bg-${dropdown=="mua"?"green-500":null} hover:bg-green-500`}
                onClick={handleDropdown}
                >ANIME MÙA</li>
              </Ripples>
              <Ripples>
                <li id="tl"  className={`py-2.5 px-5 cursor-pointer transition-all bg-${dropdown=="tl"?"green-500":null} hover:bg-green-500`}
                onClick={handleDropdown}
                >THỂ LOẠI</li>
              </Ripples>
              <Ripples>
                <li  className="py-2.5 px-5 cursor-pointer transition-all hover:bg-green-500">NHÓM DỊCH</li>
              </Ripples>
              <Ripples>
                <li  className="py-2.5 px-5 cursor-pointer transition-all hover:bg-green-500">LOẠI PHIM</li>
              </Ripples>
              <Ripples>
                <li className="py-2.5 px-5 cursor-pointer transition-all hover:bg-green-500">LỌC PHIM</li>
              </Ripples>
              <Ripples>
                <li className="py-2.5 px-5 cursor-pointer transition-all hover:bg-green-500">BẢNG XẾP HẠNG</li>
              </Ripples>
              <Ripples>
                <li className="py-2.5 px-5 cursor-pointer transition-all hover:bg-green-500">LỊCH CHIẾU PHIM</li>
              </Ripples>
            </ul>
           
        </div>  
        <Dropdown ref={dropdownRef} content={dropdown} show={open} />
            {open?<button onClick={()=>setopen(false)} className="text-white bg-gray-900 w-pageWidth block mx-auto py-3">Đóng</button>:null}
      </div>
    )
}

export default Navbar

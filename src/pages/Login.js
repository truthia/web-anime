import Ripples from "react-ripples"

const Login = () => {
    return (
        <div className="bg-gray-600 w-pageWidth  mx-auto 
        ">
            <div className="w-3/4  bg-black mt-5">
                <p className="pt-5 text-2xl text-green-400 ml-10">Đăng nhập</p>
                <form className='flex flex-col justify-around h-72 mx-10'>
                    <div className='flex flex-col'>
                        <label className='text-white' for="username">Tên đăng nhập</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="text" id="username"  />
                    </div>
                    <div className='flex flex-col'>
                        <label  className='text-white'  for="password">Mật khẩu</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="password" id="password"  />
                    </div>
                    <div className='flex flex-row items-center  '>
                        <input type="checkbox" className="bg-green-500" id="remember"  />
                        <label  className='text-white'  for="remember">Ghi nhớ đăng nhập</label>
                    </div>
                    <Ripples className="ml-5">
                        <button className="bg-green-500 text-white  px-4 py-2  rounded-md hover:bg-green-600  transition-all" type='submit'>Đăng Nhập</button>
                    </Ripples>
                    <a href="#">Quên mật khẩu?</a>
                </form>
            </div>
        </div>
    )
}

export default Login

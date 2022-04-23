import Ripples from "react-ripples"

const Register = () => {
    return (
        <div className="bg-gray-600 w-pageWidth  mx-auto 
        ">
            <div className="w-3/4  bg-black mt-5">
                <p className="pt-5 text-2xl text-green-400 ml-10">Đăng Ký</p>
                <form className='grid grid-cols-2 gap-x-3 mx-10 mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-white' for="username">Tên đăng nhập</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="text" id="username" required />
                    </div>
                    <div className='flex flex-col'>
                        <label  className='text-white'  for="name">Họ tên</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="text" id="name" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white' for="email">Email</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="email" id="email" required />
                    </div>
                    <div className='flex flex-row items-center  pt-5'>
                        <span className="text-white">Giới tính: </span>
                        <input type="radio" name="gioitinh"
                        className="bg-green-500 ml-4" id="nam" required />
                        <label  className='text-white'  for="nam">Nam</label>
                        <input type="radio" name="gioitinh"
                        className="bg-green-500 ml-4" id="nu"
                        required  />
                        <label  className='text-white'  for="nu">Nữ</label>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white' for="password">Mật khẩu</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="password" id="password" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white' for="confirm">Xác nhận mật khẩu</label>
                        <input className="h-8 focus:outline-none border-2 focus:border-green-500 rounded-md pl-2" type="password" id="confirm" required />
                    </div>
                    <div className="pt-8">
                        <input type="checkbox" />
                        <span className="text-white"> Tôi đồng ý với các quy định của website</span>
                    </div>
                    <Ripples className="ml-5 col-span-2 mt-4">
                        <button className="bg-green-500 text-white  px-4 py-2  rounded-md hover:bg-green-600  transition-all" type='submit'>Đăng Ký</button>
                    </Ripples>
                    <a href="#">Quên mật khẩu?</a>
                </form>
            </div>
        </div>
    )
}

export default Register

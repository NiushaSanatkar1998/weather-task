import weather from "../../assets/image/Weather.jpg";
const Login = () => {
  return (
    <>
      <div className="w-full bg-[#f2f9fd] h-[600px] flex flex-row justify-center items-center">
        <div className="w-[60%] flex flex-row h-[70%] ">
          <div className="w-[50%] bg-white flex flex-col gap-7 items-center rounded-l-xl shadow-lg ">
            <p className=" font-semibold text-lg mt-20">Login</p>
            <input
              placeholder="Enter Your Name"
              type="text"
              className="w-[80%] py-2 px-2 border-solid border-[1px] text-xs border-gray-200 rounded-[4px]"
            ></input>
            <button className="w-[80%] text-white text-xs py-2 px-2 bg-[#2196f3] mt-28 rounded-[4px]">
              LOGIN
            </button>
          </div>
          <div className="w-[50%] bg-purple-300 flex rounded-r-xl shadow-lg ">
            <img className="w-[100%] rounded-r-xl" src={weather} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

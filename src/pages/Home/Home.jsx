import Header from "../../components/Header/Header";
import cloud from "../../assets/image/fetch/cl.jpg";
import chart from "../../assets/image/fetch/chart.jpg";
import Produc from "../../components/Products/Produc";

const Home = () => {
  return (
    <>
      <div className="w-full h-[600px] bg-[#f3fafe] ">
        <Header />
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row">
            <div className="w-full flex flex-row gap-2 ">
              <div className="w-[45%] bg-[#e1e9ee] flex flex-row gap-2 mt-7 py-1 px-4 ml-7 rounded-2xl ">
                <div className="flex flex-col">
                  <div className=" flex flex-row gap-1 w-40 bg-[#cdd9e0] justify-center ml-2 mt-2 py-2  rounded-3xl text-[#3d4852]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20"
                      height="20"
                      viewBox="-4 0 32 32"
                      version="1.1"
                    >
                      <title>location</title>
                      <desc>Created with Sketch Beta.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Icon-Set-Filled"
                          transform="translate(-106.000000, -413.000000)"
                          fill="#3d4852"
                        >
                          <path
                            d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                            id="location"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <p className="text-md">San Francisco</p>
                  </div>
                  <p className="text-4xl font-semibold text-[#003464] mt-4">
                    Monday
                  </p>
                  <div className="w-60 flex flex-row gap-10 text-[#003464] text-sm mt-3 ">
                    <p>24 Dec, 2023</p>
                    <p>11:45 AM</p>
                  </div>
                  <p className="text-4xl font-semibold text-[#003464] mt-4">
                    26 ⁰C
                  </p>
                  <div className="w-60 flex flex-row gap-10 text-[#003464] text-sm mt-3 ">
                    <p>High:27 Low:10</p>
                  </div>
                </div>
                <div>
                  <img src={cloud} alt="" />
                </div>
              </div>
              <div className="w-[50%] flex flex-row  mt-7 ml-3 ">
                <img src={chart} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[96%] bg-[#cdd9e0]  mt-7 py-3 px-4 ml-7 rounded-2xl ">
          <p className="ml-4 font-semibold mb-2 text-xl text-[#003464]">
            2 Weeks Forecast
          </p>
          <Produc />
        </div>
      </div>
    </>
  );
};

export default Home;

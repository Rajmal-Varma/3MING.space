import React from 'react'

const Roadmap = () => {
  return (
    <div className='absolute top-[1180px] w-[90vw] h-[700px] pl-2 flex'>
        <div>
      <h1 className=" text-5xl  uppercase font-bold mx-4 px-4 mt-4 mb-8  text-white md:text-4xl lg:text-[40px]">
        Roadmap
      </h1>

      {/* left section */}
      <div className=" text-white w-[660px] h-[480px] flex flex-col pl-8  my-16 py-14 justify-between sm:w-[320px] lg:w-[422px]">
        <div className='mb-8' >
          <h2 className="text-5xl font-bold md:text-4xl lg:text-[45px]">Connect with Games</h2>
          <p className="text-3xl font-medium">Feb 2023</p>
        </div>
        <div className='mt-4' >
          <h2 className="text-5xl font-bold md:text-4xl lg:text-[45px]">Launch 3Ming.List</h2>
          <p className="text-3xl font-medium">March 2023</p>
        </div>
      </div>
        </div>


      <div className="  h-[700px] w-[12px] bg-white  flex flex-col items-center justify-around rounded-t-[40px] rounded-b-[40px]">
        <span className=" w-[16px] h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[16px] h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[16px] h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[16px] h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[16px] h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
      </div>

        {/* Right Section */}
      <div className=" text-white w-full max-w-[700px] h-[690px]  flex flex-col mt-6  justify-between xl:w-[600px] ml-12 sm:w-[600px] sm:ml-0 lg:ml-0">
        <div className="pl-6 ml-6 mt-4 ">
          <h2 className="text-[44px] font-bold md:text-3xl lg:text-4xl">Comming Soon page</h2>
          <p className="text-3xl font-medium ">Jan 2023</p>
        </div>
        <div className="pl-6 ml-6 mt-4">
          <h2 className="text-[50px] font-bold md:text-4xl lg:text-[40px] lg:leading-10">5 College Game Events</h2>
          <p className="text-[32px] font-medium">March 2023</p>
        </div>
        <div className="pl-6 m-6">
          <h2 className="text-5xl font-bold md:text-4xl lg:text-[40px] lg:leading-10">Launch 3Ming.Stream</h2>
          <p className="text-3xl font-medium">May 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

import React from 'react'
import MyLogo from '../assets/LandingPage2.png';

function LandingPage() {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-[#FDFAF5] text-[18px] md:text-[20px]">
        <div className="max-w-[1380px] w-full min-h-screen px-4 flex flex-col md:flex-row">

          <div className="md:w-1/2 w-full flex items-center justify-left  mt-8 md:mt-0">
            <img src={MyLogo} alt="College Management" className="max-w-[550px] w-full h-auto" />
          </div>


          <div className="md:w-1/2 w-full flex items-center py-8 mt-8 md:mt-0">
            <div className="w-full">

              <h1 className='text-[2.5rem] md:text-[3.5rem] font-poppins leading-[2.75rem] md:leading-[3.5rem]'>College Management System</h1>

              <p className='text-[1rem] md:text-[1.125rem] mt-6 font-system'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore qui explicabo consequatur dicta fugit corrupti repellat perferendis facilis incidunt culpa asperiores sit repudiandae velit!</p>


              <div className="mt-6 flex justify-center font-system">
                <button className='bg-purple-500 rounded-[8px]  text-white px-6 py-2 text-[1rem] md:text-[1.125rem] cursor-pointer hover:bg-purple-600'>login</button>
              </div>

              <div className="mt-6 flex justify-center font-system">
                <p className='text-[1rem] md:text-[1.125rem] mt-3 '>
                  Having login issues? <a href="" className='text-purple-500 underline'>Contact Support</a>
                </p>
              </div>


              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
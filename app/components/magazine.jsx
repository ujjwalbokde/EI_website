import React from 'react'

function Magazine() {
  return (
    <>
     <div className='h-[200vh] lg:h-screen  w-full flex items-center flex-col lg:flex-row  py-30 lg:py-0'>
         
                    <div className='h-5/6 w-[60%] relative flex items-center justify-center  flex-col  gap-10 lg-gap-0   '>
                            <div className='h-full w-full lg:mt-0 mt-10 hidden lg:block'>

                             <div className='h-96 w-80 rounded-xl bg-red-200 absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 -rotate-[0deg] overflow-hidden '>
                             <img className='h-full w-full object-cover object-top border-2 ' src="/trip.png" alt="" />
                             </div>

                             <div className='h-96 w-80 rounded-xl bg-red-300 absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] overflow-hidden'>
                             <img className='h-full w-full object-cover object-top border-2 ' src="/events.png" alt="" />
                             </div>
                             
                             <div className='h-96 w-80 rounded-xl bg-red-400 absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 -rotate-[7deg] overflow-hidden'>
                             <img className='h-full w-full object-cover object-top border-2 ' src="/meddel.png" alt="" />
                             </div>

                             <div className='h-96 w-80 rounded-xl  absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] overflow-hidden overflow-hidden'>
                              <img className='h-full w-full object-cover object-top border-2 ' src="/Front-page.png" alt="" />
                             </div>
                            </div>
                              
                            <div className='h-96 w-80 rounded-xl overflow-hidden block lg:hidden '>
                              <img className='h-full w-full object-cover object-top border-2 ' src="/Front-page.png" alt="" />
                             </div>
                            <button className='px-10 py-2 border-4 rounded-lg text-zinc-800'>
                                take a look
                            </button>
                    </div>
 
                    <div className='h-full w-full py-32 px-10 '>
                        <h1 className='text-4xl'>Check out Our Magazine</h1>
                        <h5 className=' mt-3 lg:mt-20'>
                            Discover the brilliance of Indian engineering, innovation, and technology in our flagship magazine, Engineering India. With every issue, we aim to spotlight groundbreaking projects, visionary leaders, and emerging trends shaping India's engineering landscape. <br /> <br />
                            Dive into captivating stories of success, in-depth technical insights, and exclusive interviews with industry experts. Whether you’re an aspiring engineer, a seasoned professional, or simply fascinated by the marvels of modern engineering, Engineering India is your gateway to knowledge and inspiration. <br /> <br />
                            Stay ahead, stay informed, and join us in celebrating India's engineering excellence. Subscribe now to be part of this transformative journey!</h5>
                    </div>



     </div>



    </>
  )
}

export default Magazine
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components-1/ui/accordion"
  

function Fqr() {
  return (
    <div className='h-[80vh] w-full '>
        <div className='w-full flex items-center justify-center flex-col  gap-10  '>

              <h1 className='text-5xl '>FAQ's</h1>
              <div className=' w-80  lg:w-[60%]'>
              <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1" className="border-b-[1.5px]">
        <AccordionTrigger className="lg:text-xl text-start lg:whitespace-nowrap" >Q: What is the importance of engineering education in India?</AccordionTrigger>
        <AccordionContent className="mb-2">
        Engineering is one of the most sought-after fields in India. It drives technological innovation, infrastructure development, and economic growth. With a strong emphasis on STEM education, India produces millions of engineering graduates annually, contributing to industries worldwide.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-[1.5px]">
        <AccordionTrigger className="lg:text-xl text-start lg:whitespace-nowrap " >Q:Which are the top engineering colleges in India?</AccordionTrigger>
        <AccordionContent className=" mb-2">
        The top engineering colleges include the Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian Institute of Science (IISc), Birla Institute of Technology and Science (BITS Pilani), and Delhi Technological University (DTU).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3"  className="border-b-[1.5px]"  >
        <AccordionTrigger className="lg:text-xl text-start lg:whitespace-nowrap" >Q: What are the most popular branches of engineering in India?</AccordionTrigger>
        <AccordionContent className="transition-all duration-75 ease-in-out  mb-2">
        The popular branches include Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Mechanical Engineering, Civil Engineering, Electrical Engineering, and newer fields like Artificial Intelligence, Data Science, and Robotics.
        </AccordionContent >
      </AccordionItem >
      <AccordionItem value="item-4" className="border-b-[1.5px]" >
        <AccordionTrigger className="lg:text-xl text-start lg:whitespace-nowrap" >Q: What are the most popular branches of engineering in India?</AccordionTrigger>
        <AccordionContent className="transition-all duration-75 ease-in-out  mb-2 ">
        The popular branches include Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Mechanical Engineering, Civil Engineering, Electrical Engineering, and newer fields like Artificial Intelligence, Data Science, and Robotics.
        </AccordionContent >
      </AccordionItem >
      <AccordionItem value="item-5" className="border-b-[1.5px]"  >
        <AccordionTrigger className="lg:text-xl text-start lg:whitespace-nowrap" >Q: What are the most popular branches of engineering in India?</AccordionTrigger>
        <AccordionContent className="transition-all duration-75 ease-in-out mb-2 ">
        The popular branches include Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Mechanical Engineering, Civil Engineering, Electrical Engineering, and newer fields like Artificial Intelligence, Data Science, and Robotics.
        </AccordionContent >
      </AccordionItem >
    </Accordion>

              </div>
        </div>
    </div>
  )
}

export default Fqr
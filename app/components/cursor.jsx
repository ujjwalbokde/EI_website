import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = ({ hoveredIndex }) => {
  const [state] = useState([
    " ", // 0
    "..", // 1
    "..", // 2
    " .. ", // 3
    "Dnyanata Wakode", // 4
    "...", // 5
    "Swastika T.", // 6
    "...", // 7
    "Virendra Lokhande", // 8
    "...", // 9
    "Parth Dehare", // 10
    " ...", // 11
    "Harsh", // 12
    "Laxmikant Dhawade", // 13
    "rahual", // 14
    "Aastha Chilbilwar", // 15
    "Ruhi", // 16
    "Sakshi", // 17
    "..", // 18
    "..", // 19
    "..", // 20
    "Mansi", // 21
    "...", // 22
    "...", // 23
    "Chirayu patle", // 24
    "Vaideesh Deshmukh", // 25
    "Sujal Sawalkar", // 26
    "Himanshu Kukde", // 27
    "Himanshu Kukde", // 28
    "Muchkundraje Thote", // 29
    "Aliya Sayyad", // 30
    "Amey da", // 31
    "..", // 32
    "Mayur Buddhe", // 33
    "Malay Lokhande", // 34
    "Rewant Chaudhari", // 35
    "Piyush Piprewar", // 36
    "Shivam", // 37
    "Ujjwal Bokde", // 38
    "Dnyaneshwar Itankar", // 39
    "...", // 40
    "..", // 41
    "..", // 42
  ]);
  
  const [displayText, setDisplayText] = useState(""); // State for the current text
  const textRef = useRef(null); // Ref for the text element

  useEffect(() => {
    if (hoveredIndex !== null && state[hoveredIndex]) {
      // Animate opacity to 0
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setDisplayText(state[hoveredIndex]); // Change the text after fading out
          // Animate opacity back to 1
          gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }
  }, [hoveredIndex, state]);

  useGSAP(() => {}, []);

  return (
    <div>
      <div className="cursor min-h-5 min-w-5 bg-blue-500 text-white font-bold px-2 py-1 absolute z-10 rounded-full pointer-events-none">
        <h1 ref={textRef}>{displayText}</h1>{" "}
        {/* Bind the ref to the text element */}
      </div>
    </div>
  );
};

export default Cursor;

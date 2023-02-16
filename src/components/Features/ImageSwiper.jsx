import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import sideOne from '../.././assets/SideOne-min.jpeg'
import sideTwo from '../.././assets/SlideFour-min.jpeg'
import sideThree from '../.././assets/SlideSeven-min.jpeg'
import sideFour from '../.././assets/SlideSix-min.jpeg'
import sideFive from '../.././assets/slideThree-min.jpeg'


// Slide Images
const images = [ sideOne , sideTwo,  sideThree, sideFour , sideFive];


// GLOBAL VARIABLE
let count = 0;
let slideInterval;

const ImageSwiper = () => {
  // Use State  for the current index 
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use Ref for the current index
	const slideRef = useRef();

  // Remove Animation
	const removeAnimation = () => {
		slideRef.current.classList.remove("fade-anim");
	};

  // Use Effect for the current index and pause  start slider and remove animation using mouse enter and mouse leave
	useEffect(() => {
		slideRef.current.addEventListener("animationend", removeAnimation);
		slideRef.current.addEventListener("mouseenter", pauseSlider);
		slideRef.current.addEventListener("mouseleave", startSlider);

		startSlider();
		return () => {
			pauseSlider();
		};
		// eslint-disable-next-line
	}, []);

  // Start Slider  function with set interval . This will be called when the slider start in every 3 seconds
	const startSlider = () => {
		slideInterval = setInterval(() => {
			handleOnNextClick();
		}, 3000);
	};

  // this will be called when the slider is paused
	const pauseSlider = () => {
		clearInterval(slideInterval);
	};

  // Handle on next click
	const handleOnNextClick = () => {
		count = (count + 1) % images.length;
		setCurrentIndex(count);
		slideRef.current.classList.add("fade-anim");
  };
  
  // Handle on previous click
	const handleOnPrevClick = () => {
		const productsLength = images.length;
		count = (currentIndex + productsLength - 1) % productsLength;
		setCurrentIndex(count);
		slideRef.current.classList.add("fade-anim");
	};
  

     


   return (
			<>
				<section>
					<div className=" py-40">
						<div ref={slideRef} className="w-full relative select-none">
							<div className="aspect-w-16 aspect-h-9">
								<img className="  " src={images[currentIndex]} alt="" />
							</div>

							<div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
								<button
									onClick={handleOnPrevClick}
									className="bg-PrimaryColor text-white p-1 rounded-full bg-opacity-60 cursor-pointer hover:bg-opacity-100 transition"
								>
									<AiOutlineVerticalRight size={35} />
								</button>
								<button
									onClick={handleOnNextClick}
									className="bg-PrimaryColor text-white p-1 rounded-full bg-opacity-60 cursor-pointer hover:bg-opacity-100 transition"
								>
									<AiOutlineVerticalLeft size={35} />
								</button>
							</div>
						</div>
					</div>
				</section>
			</>
		);
};


export default ImageSwiper;

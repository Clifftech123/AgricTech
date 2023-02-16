


const Hero = () => {
	const FisherMen =
		"https://media.istockphoto.com/id/1197909717/photo/local-fishermen-lake-george-uganda.jpg?s=612x612&w=0&k=20&c=S76P4Ndpg5VD0CPjRyyLDhZcL8MyHQHzYmAESCQhK-g=";

	return (
		<>
			<header class="bg-white  max-w-screen-xl mx-auto " id="home">
				{/*    MY POND PLATFORM AND OUR MOBILE APP PLATFORM BUTTONS  */}

				<div>
					
				</div>
				{/* ========= HERO CONTENT ============== */}
				<div class="lg:flex">
					<div class="flex items-center justify-center w-full px-6 py-8  lg:h-[35rem] lg:w-1/2">
						<div class="max-w-xl">
							<h2 class="text-3xl text-center font-Poppins   uppercase font-semibold text-gray-800  lg:text-3xl">
								<span class="text-SecondaryColor"> Precision </span>
								Aquaculture
							</h2>

							<p class=" text-center text-lg lg:text-md font-Poppins lg:mb-40  mt-4 text-gray-600 ">
								Unique way of farming fish sustainably using technology. Farm with us using our ultramodern technologies to increase your fish yield and income.
							</p>
						</div>
					</div>

					{/* FISH MAN IMAGE  */}
					<div class="w-full  px-5 sm:px-5 h-64 lg:w-1/2 lg:h-auto">
						<img
							className="object-cover w-full  rounded-[3rem] object-center "
							alt="hero"
							src={FisherMen}
						/>
					</div>
				</div>
			</header>
			{/*  END OF HERO CONTENT */}
		</>
	);
};

export default Hero;

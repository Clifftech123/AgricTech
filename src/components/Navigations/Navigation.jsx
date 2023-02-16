import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/aqua met-logo.png";
import { HashLink } from "react-router-hash-link";



const Nav = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	// function to handle the navbar when you click on the navbar
	function handleNavItemClick(event) {
		document
			.querySelectorAll(".nav-item")
			.forEach((node) => node.classList.remove("active"));
		event.currentTarget.classList.add("active");
	}

	// useRef function to close the navbar when your click out the navbar
	let menuRef = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setMobileNavOpen(false);
				console.log(menuRef.current);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<>
			<nav>
				{/* Page Header */}
				<header className=" flex flex-none items-center fixed top-0 left-0 right-0  duration-100  bg-white  shadow-sm border-b  border-gray-200   z-50">
					<div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
						<div className="flex justify-between py-4">
							{/* Left Section */}
							<div className="flex items-center bg-transparent border-gray-600 rounded-full ">
								{/* Logo */}
								<button className="group border-PrimaryColor  border rounded-full p-2 inline-flex items-center space-x-2 font-bold text-xl tracking-wide ">
									<img className=" w-10 h-10  " src={Logo} alt="logo" />
								</button>
								{/* END Logo */}
							</div>

							{/* END Left Section */}

							{/* Right Section */}
							<div className="flex items-center space-x-1 lg:space-x-5">
								{/* Desktop Navigation */}
								<nav className="hidden lg:flex lg:items-center lg:space-x-2">
									{/* HOME */}

									<button
										className="nav-item active rounded-full text-md  text-gray-500 font-Poppins  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className=" flex  hover:transition-colors hover:duration-200    items-center space-x-2 px-3 py-2 rounded   font-medium text-lg   tracking-wide  "
											smooth
											to="/#home"
										>
											Home
										</HashLink>
									</button>
									{/* Product and Services */}
									<button
										className="nav-item text-gray-500 font-Poppins rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium
											hover:transition-colors hover:duration-200 text-md
											tracking-wide flex items-center space-x-2 px-3 py-2
											rounded "
											smooth
											to="/#ProductAndServices"
										>
											Product and Services
										</HashLink>
									</button>
									{/* Impact */}
									<button
										className="nav-item   rounded-full  text-gray-500 font-Poppins  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md tracking-wide
										flex items-center space-x-2 px-3 py-2 "
											smooth
											to="/#impact"
										>
											Impact
										</HashLink>
									</button>
									{/* Team */}
									<button
										className="nav-item  text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md tracking-wide
										flex items-center space-x-2 px-3 py-2 "
											smooth
											to="/#team"
										>
											Team
										</HashLink>
									</button>
									{/*  Partners    */}
									<button
										className="nav-item  text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium transition-colors
										duration-200 text-md tracking-wide flex items-center
										space-x-2 px-3 py-2 "
											smooth
											to="/#partners"
										>
											Partners
										</HashLink>
									</button>
									{/*  About    */}
									<button
										className="nav-item  text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium transition-colors duration-200   hover:bg-BntColor text-md   tracking-wide flex items-center space-x-2 px-3 py-2  "
											smooth
											to="/#about"
										>
											{" "}
											About
										</HashLink>
									</button>
									<button
										className="nav-item  text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium transition-colors
										duration-200 hover:bg-BntColor text-md tracking-wide flex
										items-center space-x-2 px-3 py-2 rounded "
											smooth
											to="/#contact"
										>
										
											Contact
										</HashLink>
									</button>
								</nav>

								{/* END Desktop Navigation */}

								{/* Toggle Mobile Navigation */}
								<div className="xl:hidden">
									<button
										type="button"
										className="flex transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 bg-transplant hover:bg-BntColor leading-6 rounded  focus:ring-opacity-25 active:bg-white  active:shadow-none"
										onClick={() => setMobileNavOpen(!mobileNavOpen)}
									>
										{mobileNavOpen ? (
											""
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										)}
									</button>
								</div>
								{/* END Toggle Mobile Navigation */}
							</div>
							{/* END Right Section */}
						</div>

						{/* Mobile view Navigation This section will show on only mobile devices */}
						<div
							ref={menuRef}
							className={`   bg-white shadow-2xl    fixed top-0 z-50  w-3/4 h-screen  lg:hidden flex flex-col gap-10  text-medium  p-7 pt-10 right-0  duration-500 xl:hidden ${
								mobileNavOpen ? "right- text-center" : "right-[-100%]"
							}`}
						>
							{/* Toggle Mobile Navigation  on small device */}
							<div className="lg:hidden  ">
								{/* close the navbar icons  */}
								<button
									type="button"
									className="flex  transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 leading-6 rounded    text-gray-800    focus:ring focus:ring-gray-200 focus:ring-opacity-25 "
									onClick={() => setMobileNavOpen(!mobileNavOpen)}
								>
									{mobileNavOpen ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 "
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										""
									)}
								</button>
							</div>
							{/* END OF TOGGLE ICON */}

							<nav className="flex  justify-center text-center  transition duration-300  flex-col space-y-2 py-4    ">
								{/* HOME */}
								<div className="w-full  hover:transition-colors hover:duration-200 hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										className="nav-item active  text-gray-500 font-Poppins  rounded-full "
										onClick={handleNavItemClick}
									>
										<HashLink
											className=" font-medium text-md text-center font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded "
											smooth
											to="/#home"
										>
											Home
										</HashLink>
									</button>
								</div>

								<hr className="   border-gray-100" />
								{/* Product and Services */}

								<div className="w-full    hover:transition-colors hover:duration-200 hover:rounded-md">
									<button
										className="nav-item   text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md
										font-Poppins tracking-wide flex items-center space-x-2 px-3
										py-2 rounded "
											smooth
											to="/#ProductAndServices"
										>
											Product and Services
										</HashLink>
									</button>
								</div>

								{/*   Impact */}
								<hr className="   border-gray-100" />

								<div className="w-full hover:duration-200 hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										className="nav-item   text-gray-500 font-Poppins  rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className=" font-medium text-md font-Poppins
										tracking-wide flex items-center space-x-2 px-3 py-2 rounded
										"
											smooth
											to="/#impact"
										>
											Impact
										</HashLink>
									</button>
								</div>

								{/* Team */}
								<hr className="   border-gray-100" />

								<div className="w-full  hover:transition-colors hover:duration-200  hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										className="nav-item    text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded  "
											smooth
											to="/#team"
										>
											Team
										</HashLink>
									</button>
								</div>
								<hr className="   border-gray-100" />
								{/* {/*  Partners */}

								<div className="w-full  hover:transition-colors hover:duration-200  hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										className="nav-item    text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded    "
											smooth
											to="/#partners"
										>
											Partners
										</HashLink>
									</button>
								</div>

								{/* {/* About */}
								<hr className="  border-gray-100" />
								<div className="w-full  hover:transition-colors hover:duration-200  hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										className="nav-item   text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded    "
											smooth
											to="/#about"
										>
											{" "}
											About{" "}
										</HashLink>
									</button>
								</div>
								<hr className="   border-gray-100" />
								{/* {/* contact */}
								<div className="w-full  hover:transition-colors hover:duration-200  hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										className="nav-item    text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<HashLink
											className="font-medium text-md font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded  "
											smooth
											to="/#contact"
										>
											Contact
										</HashLink>
									</button>
								</div>

								<hr className=" border-gray-100" />
								
							</nav>
						</div>
						{/* END Mobile Navigation */}
					</div>
				</header>
				{/* END Page Header */}
			</nav>
		</>
	);
};

export default Nav;

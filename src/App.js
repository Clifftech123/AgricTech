import About from "./components/About/About";
import SwiperIMage from "./components/Features/ImageSwiper";
import  Footer  from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Impact from "./components/Impacts/Impact";
import Nav from "./components/Navigations/Navigation";
import Partners from "./components/Partners/Partners";
import ProductServices from "./components/ProductAndServices/product_services";
import Teams from "./components/Teams/Teams";



function App() {
  return (
		<>
		   <Nav />
		   <SwiperIMage />
		   <Hero />
		  <ProductServices />
		  <Impact/>
		  <Teams />
		  <Partners />
		  <About />
		  <Footer/>
		</>
	);
}

export default App;

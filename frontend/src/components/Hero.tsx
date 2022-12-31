import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Hero = () => {
  return (<div className="mt-[126px] h-screen w-full">
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={30}
    totalSlides={3}
    
    className = "bg-red-500 h-screen relative"
    ><div className='flex w-full absolute top-60 justify-between px-10 z-10'>

        <ButtonBack><ArrowBackIosNewIcon /></ButtonBack>
        <ButtonNext><ArrowForwardIosIcon /></ButtonNext>
    </div>
    <Slider className='bg-blue-500 h-screen' >
          <Slide index={0} className = "">
            <div className='absolute bg-[rgba(51,51,51,0.4)] h-screen w-full flex flex-col justify-center items-start'>
              <p className='relative bottom-20 ml-28 text-5xl text-white font-semibold font-[]'>Get everything you need in one place</p>
            </div>
            <img src="src/assets/man-hero.jpg" alt="" className='object-contain'/></Slide>
          <Slide index={1} className = ""><img src="src/assets/mobile-hero.jpg" alt=""  className='object-contain '/></Slide>
          <Slide index={2} className = ""><img src="src/assets/shoe-hero.jpg" alt=""  className='object-contain '/></Slide>
        </Slider>
      
      </CarouselProvider>
  </div>
  );
};

export default Hero;

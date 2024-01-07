import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Portfolio.css'
import Image from '../../assets/Ecommerce.jpg'
import Image2 from '../../assets/neyat.PNG'
import Image3 from '../../assets/youtube.PNG'
import Image4 from '../../assets/crud.PNG'
import { Link } from 'react-router-dom';
export default function Portfolio() {
  return <>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="container swiper-container">
        <div className="row">
        <div className="col-md-6">
          <div className="left-img">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h3>E-Commerce </h3>
          <h6>Front-end</h6>
          <p className='p-app'>ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.</p>
        <Link to={"https://mohamedgamalabdelaal.github.io/Gemy-Shop/"}><button className='btn2'>View</button></Link>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="container swiper-container">
        <div className="row">
        <div className="col-md-6">
          <div className="left-img">
            <img src={require("../../assets/imageGenerator.PNG")} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Image Generator</h3>
          <h6>Front-end</h6>
          <p className='p-app'>These image generator tools will get you the best AI-generated images using text-to-image .</p>
        <Link to={"/"}><button className='btn2'>View</button></Link>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="container swiper-container">
        <div className="row">
        <div className="col-md-6">
          <div className="left-img">
            <img src={Image3} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Youtube Page</h3>
          <h6>Front-end</h6>
          <p className='p-app'>Handsome design for youtube page used html5 , css3 , bootstrap</p>
        <button className='btn2'>View</button>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="container swiper-container">
        <div className="row">
        <div className="col-md-6">
          <div className="left-img w-75">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Neyat App</h3>
          <h6>Ui Ux</h6>
          <p className='p-app'>Muslim Assistant app is made for Muslims and designed to meet daily Islamic needs. It contains features like prayer times, qibla direction via compass, Quran, hadith, dhikr counter and more.</p>
        <Link to={'https://www.behance.net/gallery/145833251/Neyat-App'} target='_blank'><button className='btn2'>View</button></Link>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="container swiper-container">
        <div className="row">
        <div className="col-md-6">
          <div className="left-img">
            <img src={Image4} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Book Marker</h3>
          <h6>CRUD System</h6>
          <p className='p-app'>Have built CRUDS System and Learned how to create (Create, Read, Update, Delete, and Search) on the CRUDS application with plain JavaScript. We are not going to use any JavaScript frameworks instead we use plain JavaScript, CSS, and HTML to build a CRUD application.</p>
        <Link to={"https://mohamedgamalabdelaal.github.io/Book-Marker/"}><button className='btn2'>View</button></Link>
        </div>
        </div>
        </div>
        </SwiperSlide>
      
      
    </Swiper>
  </>
    
}

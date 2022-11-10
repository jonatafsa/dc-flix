import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Autoplay } from "swiper";
import Nav from '../components/Nav'

import '../styles/pages/home.scss'

export default function Home() {
  return (
    <div className="home-container">

      <header>
        <img src="/images/header.png" alt="" />
      </header>

      <div className="home-message">
        <h1>Join the DC UNIVERSE</h1>
        <p>
          The DC Universe (DCU) is the shared universe where most of the
          comic stories published by DC Comics take place. Superman,
          Batman, and Wonder Woman are well-known superheroes from this
          universe.  Note that in context, "DC Universe" is usually used
          to refer to the main DC continuity.Occasionally, "DC Universe"
          will be used to indicate the entire "DC Multiverse"; the collection
          of all continuities within DC Comics publications.
        </p>
      </div>

      <div className="free-comics">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={8}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className="free-comics-swiper"
          navigation
        >
          <SwiperSlide className="swiper"><img src="/images/comics/comic-1.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-2.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-3.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-4.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-5.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-6.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-7.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-1.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-2.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/comics/comic-3.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
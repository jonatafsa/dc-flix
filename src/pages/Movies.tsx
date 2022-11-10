import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import Nav from "../components/Nav";

import '../styles/pages/movies.scss';

export default function Movies() {
  return (
    <div className="movie-container">

      <header>
        <div className="cover">
          <img src="http://s2.glbimg.com/CJRxuzh0enLW5LGEy76didWveIU=/e.glbimg.com/og/ed/f/original/2017/11/16/liga-da-justica.jpg" alt="" />
        </div>

        <div className="header-content">
          <div className="type">
            <img src="/images/DC_Comics_logo.svg" alt="" />
            <p>Movies</p>
          </div>

          <div className="title">
            <img src="https://mimo.toys/wp-content/uploads/2020/04/JL_Logo.png" alt="" />
          </div>
          <div className="rating">
            <img src="/images/rated.svg" alt="" />
            <span>PG-13</span>
          </div>
          <p className="description">
            A Liga da Justiça é uma equipe de super-heróis fictícia
            que aparece em quadrinhos americanos publicados pela
            DC Comics. A equipe foi criada por Gardner Fox e
            Mike Sekowsky, com a primeira aparição em The
            Brave and the Bold #28 (novembro de 1960).
          </p>

          <div className="buttons">
            <button className="play">
              <img src="/images/play.svg" alt="" />
              <span>Play</span>
            </button>

            <button className="info">
              <img src="/images/info.svg" alt="" />
              <span>More Info</span>
            </button>
          </div>
        </div>

        <div className="end-header"></div>
      </header>

      <div className="top-rated">

        <div className="title-link">
          <h1>Top Rated</h1>
          <a href="#">See All</a>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={4}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"
          navigation
        >
          <SwiperSlide className="swiper"><img src="/images/movies/movie-1.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-2.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-3.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-4.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-5.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-6.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-7.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-8.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-2.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-3.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <div className="top-rated-preview-movie">

      </div>

      <div className="animated-movies">
        <div className="title-link">
          <h1>Animated Series</h1>
          <a href="#">See All</a>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={5}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"
          navigation
        >
          <SwiperSlide className="swiper"><img src="/images/movies/movie-9.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-10.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-11.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-12.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-13.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-14.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-15.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-16.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-9.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-10.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <div className="fan-favourite">
        <div className="title-link">
          <h1>Fan Favourite</h1>
          <a href="#">See All</a>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={4}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"
          navigation
        >
          <SwiperSlide className="swiper"><img src="/images/movies/movie-6.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-8.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-14.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-1.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-6.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-11.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-2.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-16.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-9.png" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper"><img src="/images/movies/movie-10.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
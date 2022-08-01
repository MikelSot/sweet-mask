import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import 'swiper/css/scrollbar'

import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// SwiperCore.use([EffectFlip, Navigation, Pagination])

const Slider2 = () => {
  return (
    // <Swiper
    //   spaceBetween={0}
    //   slidesPerView={1}
    //   speed={500}
    //   loop={true}
    //   touchRatio={1.5}
    //   navigation={true}
    //   effect={'flip'}
    //   pagination={{ clickable: true }}
    //   className="mySwiper"
    // >
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectFlip]} // I want to focus here
      spaceBetween={50}
      slidesPerView={3}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log({ swiper })}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={`/imagenes/nosotros/nosotros-mecanico.png`} alt="Project" className="w-32 h-20" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/imagenes/nosotros/nosotros-mecanico.png`} alt="Project" className="w-32 h-20" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/imagenes/nosotros/nosotros-mecanico.png`} alt="Project" className="w-32 h-20" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider2

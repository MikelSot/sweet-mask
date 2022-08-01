// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

// import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperPage() {
  const items = [
    { key: '1', image: '/logo.svg' },
    { key: '2', image: '/logo.svgi' },
    { key: '3', image: '/logo.svgj' },
    { key: '4', image: '/logo.svgm' },
    { key: '5', image: '/logo.svgm' },
    { key: '6', image: '/logo.svg,' }
  ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
    >
      {items.map(item => (
        <SwiperSlide
          key={item.key}
          // style={{ backgroundImage: `url(${item.image})`, width: '100%', height: '200px' }}
        >
          {/* <p>{item.image}</p> */}
          <p>HOLA BEBECITA</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
